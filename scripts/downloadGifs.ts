import axios from 'axios';
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';
import { searchGifFallback } from './fallbackScraper';

const PRESET_EXERCISES_PATH = path.join(__dirname, '../presetExercises.ts');
const DOWNLOADS_DIR = path.join(__dirname, '../@downloads');

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

  const content = fs.readFileSync(PRESET_EXERCISES_PATH, 'utf-8');
  const exercises = extractExercises(content);

  console.log(`🏋️ Encontrados ${exercises.length} exercícios para processar.\n`);

  for (let i = 0; i < exercises.length; i++) {
    const ex = exercises[i];
    const slugName = slugify(`${ex.category}-${ex.name}`, { lower: true, strict: true, replacement: '-' });
    const fileName = `${slugName}.gif`;
    const outputPath = path.join(DOWNLOADS_DIR, fileName);

    if (fs.existsSync(outputPath)) {
      console.log(`[${i + 1}/${exercises.length}] ⏭️ Pulo: ${fileName} já existe.`);
      continue;
    }

    console.log(`[${i + 1}/${exercises.length}] ⬇️ Baixando: ${ex.name}...`);
    let success = await downloadFile(ex.gifUrl, outputPath);

    if (!success) {
      console.log(`⚠️ Falha ao baixar link original: ${ex.gifUrl}`);
      const fallbackUrl = await searchGifFallback(ex.name);
      
      if (fallbackUrl) {
        console.log(`🔄 Tentando baixar do fallback...`);
        success = await downloadFile(fallbackUrl, outputPath);
        if (success) {
          console.log(`✅ Sucesso via fallback: ${fileName}`);
        } else {
          console.log(`❌ Falha também no fallback para: ${ex.name}`);
        }
      } else {
        console.log(`❌ Sem fallback disponível para: ${ex.name}`);
      }
    } else {
      console.log(`✅ Sucesso: ${fileName}`);
    }
    
    // Pequeno atraso para não sobrecarregar os servidores
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log(`\n🎉 Processamento finalizado! Imagens salvas na pasta @downloads.`);
}

main().catch(console.error);
