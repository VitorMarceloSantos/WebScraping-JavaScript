const {webkit} = require('playwright');

(async () => {
  // Setup
  const browser = await webkit.launch({headless: false});
  const page = await browser.newPage();

  // The actual interesting bit
  // await context.route('**.jpg', route => route.abort());
  await page.goto('https://www.bet365.com/#/HO/');
  await page.waitForLoadState('networkidle')
  
  await page.locator('text=Aceitar').click();
  await page.locator('.hm-MainHeaderCentreWide > div:nth-child(2) > div').click();
  await page.waitForURL('https://www.bet365.com/#/IP/B1')
  await page.pause()

  // await browser.close();
})();