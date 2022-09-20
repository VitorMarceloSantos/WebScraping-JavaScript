const puppeteer = require('puppeteer');

const movieId = 'tt1877830';
const URL = `https://www.imdb.com/title/${movieId}/?ref_=fn_al_tt_1`;

(async () => {
  const browser = await puppeteer.launch(); // iniciando o navegador / headless (mostra a executação da página)
  const page = await browser.newPage(); // nova pagina

  await page.goto(URL, {waitUntil:'networkidle2'}); // indo para a página desejada

  await page.screenshot({path: './print.jpeg'});

 


  let data = await page.evaluate(() => {
    let title = document.querySelector('.sc-b73cd867-0.eKrKux').textContent; // buscando o nome do titulo do filme // observar que são duas classes ambas iniciando com .
    return {title}; // retorna um objeto
  })
  console.log(data)

   await browser.close(); // fechando o browser
})(); // executar a função assim que iniciar


