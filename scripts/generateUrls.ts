import fs from 'fs';
import path from 'path';

const downloadsDir = path.join(__dirname, '..', '@downloads');
const outputFile = path.join(__dirname, '..', 'urls_das_imagens.txt');
const repoBaseUrl = 'https://raw.githubusercontent.com/AlefLaniel/meus-gifs-treino/main/@downloads';

try {
  const files = fs.readdirSync(downloadsDir).filter(file => file.endsWith('.gif'));
  
  // Agrupar por categoria (prefixo antes do primeiro hífen)
  const grouped: Record<string, string[]> = {};
  
  for (const file of files) {
    const parts = file.split('-');
    const category = parts[0];
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(`${repoBaseUrl}/${file}`);
  }
  
  let outputContent = '';
  
  for (const [category, urls] of Object.entries(grouped).sort()) {
    outputContent += `Categoria: ${category.toUpperCase()}\n`;
    outputContent += urls.sort().map(url => `- ${url}`).join('\n');
    outputContent += '\n\n';
  }
  
  fs.writeFileSync(outputFile, outputContent.trim(), 'utf-8');
  console.log(`Arquivo gerado com sucesso em: ${outputFile}`);
  
} catch (error) {
  console.error('Erro ao gerar as URLs:', error);
}
