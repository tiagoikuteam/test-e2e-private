const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/index.html');
    
    // Perform some simple checks
    const title = await page.title();
    console.log(`Page title: ${title}`);

    const heading = await page.$eval('h1', (element) => element.textContent);
    console.log(`Heading text: ${heading}`);

    await browser.close();
})();