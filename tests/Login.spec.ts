const { chromium } = require('playwright'); // or 'firefox' or 'webkit'

(async () => {
  // Launch browser
  const browser = await chromium.launch({ headless: false }); // set to true to run headless
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to a website
  await page.goto('https://example.com');
  // Keep the browser open for a bit
  await page.waitForTimeout(5000);
 console.log("Login")
  // Close browser

})();
