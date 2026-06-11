import axios from 'axios';
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';
import { searchGifFallback } from './fallbackScraper';

const PRESET_EXERCISES_PATH = path.join(__dirname, '../presetExercises.ts');
const DOWNLOADS_DIR = path.join(__dirname, '../@downloads');
const CACHE_FILE_PATH = path.join(DOWNLOADS_DIR, 'urls_cache.json');

interface ExerciseInfo {
  category: string;
  name: string;
  gifUrl: string;
}

// Extrai os exercícios usando regex para evitar falhas do compilador TS por falta de arquivos do repositório original
function extractExercises(content: string): ExerciseInfo[] {
  const exercises: ExerciseInfo[] = [];
  const blockRegex = /{([^{}]*?)}/g;
  
  let blockMatch;
  while ((blockMatch = blockRegex.exec(content)) !== null) {
    const block = blockMatch[1];
    const categoryMatch = block.match(/category:\s*"([^"]+)"/);
    const nameMatch = block.match(/name:\s*"([^"]+)"/);
    const gifUrlMatch = block.match(/gifUrl:\s*"([^"]+)"/);
    
    if (categoryMatch && nameMatch && gifUrlMatch) {
      exercises.push({
        category: categoryMatch[1],
        name: nameMatch[1],
        gifUrl: gifUrlMatch[1]
      });
    }
  }
  return exercises;
}

async function downloadFile(url: string, outputPath: string): Promise<boolean> {
  try {
    const response = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream',
      // Timeout alto pois alguns gifs podem ser pesados e o servidor lento
      timeout: 15000, 
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    const writer = fs.createWriteStream(outputPath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => resolve(true));
      writer.on('error', (err) => {
        fs.unlink(outputPath, () => {});
        reject(err);
      });
    });
  } catch (error) {
    return false;
  }
}

async function main() {
  if (!fs.existsSync(DOWNLOADS_DIR)) {
    fs.mkdirSync(DOWNLOADS_DIR, { recursive: true });
    console.log(`📁 Diretório criado: ${DOWNLOADS_DIR}`);
  }

  if (!fs.existsSync(PRESET_EXERCISES_PATH)) {
    console.error(`❌ Arquivo não encontrado: ${PRESET_EXERCISES_PATH}`);
    return;
  }

  // Carrega o cache de URLs para verificar mudanças
  let cache: Record<string, string> = {};
  let isNewCache = true;
  if (fs.existsSync(CACHE_FILE_PATH)) {
    try {
      cache = JSON.parse(fs.readFileSync(CACHE_FILE_PATH, 'utf-8'));
      isNewCache = false;
    } catch (e) {
      console.warn(`⚠️ Aviso: falha ao ler o arquivo de cache, iniciando um novo.`);
    }
  }

  const content = fs.readFileSync(PRESET_EXERCISES_PATH, 'utf-8');
  const exercises = extractExercises(content);

  console.log(`🏋️ Encontrados ${exercises.length} exercícios para processar.\n`);

  for (let i = 0; i < exercises.length; i++) {
    const ex = exercises[i];
    const slugName = slugify(`${ex.category}-${ex.name}`, { lower: true, strict: true, replacement: '-' });
    const fileName = `${slugName}.gif`;
    const outputPath = path.join(DOWNLOADS_DIR, fileName);

    const isLocalGitHubRef = ex.gifUrl.includes('github.com/AlefLaniel/meus-gifs-treino');

    if (isLocalGitHubRef) {
      console.log(`[${i + 1}/${exercises.length}] ⏭️ Pulo: ${fileName} já aponta para o próprio repositório.`);
      // Se aponta pro repositório local e for um novo cache, podemos apenas salvar pra manter a consistência
      if (isNewCache || cache[fileName] !== ex.gifUrl) {
        cache[fileName] = ex.gifUrl;
        fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify(cache, null, 2), 'utf-8');
      }
      continue;
    }

    // Se for um cache novo e o arquivo existe localmente, vamos popular o cache com a URL atual 
    // para não ter que baixar os 220 gifs novamente. (Opcional, mas como queremos que ele atualize 
    // os que acabaram de mudar, a melhor abordagem é comparar ou baixar).
    // Como a pessoa acabou de alterar, se assumirmos a url atual como antiga, ele não atualizaria.
    // Portanto, é melhor baixar novamente os que faltarem no cache, ou o usuário pode apagar o arquivo.
    // Vamos fazer o controle correto:
    const fileExists = fs.existsSync(outputPath);
    const urlChanged = cache[fileName] !== ex.gifUrl;

    if (fileExists && !urlChanged && !isNewCache) {
      console.log(`[${i + 1}/${exercises.length}] ⏭️ Pulo: ${fileName} já está atualizado.`);
      continue;
    } else if (fileExists && isNewCache) {
      // Se não tinha arquivo de cache e o arquivo de imagem existe, talvez o usuário alterou a url DEPOIS de baixar.
      // Neste caso, para ser conservador e baixar as imagens cujas urls mudaram agora, vamos forçar o download
      // a menos que saibamos que a URL atualizou.
      // O script terá que baixar as imagens na primeira vez que rodar com essa alteração.
    }

    if (fileExists && urlChanged && !isNewCache) {
       console.log(`[${i + 1}/${exercises.length}] 🔄 Atualizando: URL de ${fileName} foi alterada.`);
    } else {
       console.log(`[${i + 1}/${exercises.length}] ⬇️ Baixando: ${ex.name}...`);
    }

    let success = await downloadFile(ex.gifUrl, outputPath);

    if (!success) {
      console.log(`⚠️ Falha ao baixar link original: ${ex.gifUrl}`);
      const fallbackUrl = await searchGifFallback(ex.name);
      
      if (fallbackUrl) {
        console.log(`🔄 Tentando baixar do fallback...`);
        success = await downloadFile(fallbackUrl, outputPath);
        if (success) {
          console.log(`✅ Sucesso via fallback: ${fileName}`);
          cache[fileName] = fallbackUrl;
        } else {
          console.log(`❌ Falha também no fallback para: ${ex.name}`);
        }
      } else {
        console.log(`❌ Sem fallback disponível para: ${ex.name}`);
      }
    } else {
      console.log(`✅ Sucesso: ${fileName}`);
      cache[fileName] = ex.gifUrl; // Atualiza a URL correta no cache
    }
    
    // Salva o cache incrementalmente para não perder progresso
    fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify(cache, null, 2), 'utf-8');

    // Pequeno atraso para não sobrecarregar os servidores
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log(`\n🎉 Processamento finalizado! Imagens salvas na pasta @downloads.`);
}

main().catch(console.error);
