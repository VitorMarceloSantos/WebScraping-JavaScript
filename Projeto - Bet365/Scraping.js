const puppeteer = require('puppeteer');

const URL = 'https://www.bet365.com/#/HO/'
const AOVIVO = 'https://www.bet365.com/#/IP/B1'

const ScrapingData = async () => {
  const browser = await puppeteer.launch({headless: false}); // iniciando o navegador / headless (mostra a executação da página)
  const page = await browser.newPage(); // nova pagina

  await page.goto(URL);

  // await browser.close(); // fechando o browser

}

ScrapingData();