const puppeteer = require('puppeteer');

const URL = `https://unsplash.com/`;

(async () => {
  const browser = await puppeteer.launch({headless: false}); // iniciando o navegador / headless (mostra a executação da página)
  const page = await browser.newPage(); // nova pagina

  await page.goto(URL); // indo para a página desejada
  await page.click('[href="https://unsplash.com/login"]') // o href é usado para o redirecinamento da página, pode utilizar a busca por classe ou id
  // quando for selecionar por atributo deve ser passado entre [], seletor por CSS não precisa dos []

  await page.type('[id="user_email"]', 'vitor.marcelo2009@hotmail.com') // utilizado para preencher campos com valores desejados
  await page.type('[id="user_password"]', 'vitor123456')
  // await page.type('[type="submit"]')

  await page.waitForNavigation();
  //Depois de fazer o login ou carregar qualquer página deve esperar o carregamento completo dos cookies e da pagina, para depois continuar a executar as ações, poir isso deve se utilizar o waitForNavegation

  await page.waitForSelector('.sucess', {visible:true}); //procurar algum eleemento ou css que só aparece após a pagina ser carregado.Exemplo: esperar até que a classe .sucess se torne visivel para realizar as demais ações

  // await page.evaluate(() => {}) //Espera uma função que será executada no browser(usando o DOM) //https://www.youtube.com/watch?v=K5yYBJhix5A&ab_channel=Rocketseat

   // await browser.close(); // fechando o browser
})(); // executar a função assim que iniciar