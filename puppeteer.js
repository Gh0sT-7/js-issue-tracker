const puppeteer = require('puppeteer-extra')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// puppeteer.launch({
//     headless: false
// })
// .then(async browser => {
//     console.log('browser', browser);
// })
// .catch(error => {
//     console.error('error', erorr);
// })

async function main() {
    try {
        const browser = await puppeteer.launch({
            headless: false
        });
        console.log('browser', browser);

        // browser.newPage().then(async page => {
        //     page.goto('https://google.com')
        // })

        const page = await browser.newPage();

        await page.goto('https://google.com')


        //

        //

        //

    } catch (err) {
        console.error('error', err);
    }
};
main();


// puppeteer.launch({
//     headless: false
// })
// .then(async browser => {
//     const page = await browser.newPage()
//     // await page.goto('https://bot.sannysoft.com')
//     //   await page.waitForTimeout(5000)
//     //   await page.screenshot({ path: 'testresult.png', fullPage: true })
//     //   await browser.close()
// }).catch(function (err) {

// })
