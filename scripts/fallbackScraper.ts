import puppeteer from 'puppeteer';

export async function searchGifFallback(query: string): Promise<string | null> {
  let browser;
  try {
    console.log(`\n🔍 Iniciando busca fallback para: "${query}"...`);
    // Lançar o navegador em modo headless
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // Configurar user agent para evitar bloqueios simples
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

    // Vamos buscar no Tenor (ótima fonte de GIFs)
    const formattedQuery = query.replace(/\s+/g, '-').toLowerCase();
    const tenorUrl = `https://tenor.com/search/${formattedQuery}-gifs`;
    
    await page.goto(tenorUrl, { waitUntil: 'domcontentloaded' });
    
    // Esperar um pouco para os GIFs carregarem
    await page.waitForSelector('div.Gif img', { timeout: 5000 }).catch(() => null);
    
    const gifSrc = await page.evaluate(() => {
      // Buscar a primeira imagem dentro da classe Gif
      const img = document.querySelector('div.Gif img') as HTMLImageElement;
      return img ? img.src : null;
    });

    if (gifSrc) {
      console.log(`✅ GIF alternativo encontrado: ${gifSrc}`);
      return gifSrc;
    } else {
      console.log(`❌ Nenhum GIF alternativo encontrado no Tenor para: ${query}`);
      return null;
    }
  } catch (error) {
    console.error("Erro no fallback scraper:", error);
    return null;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
