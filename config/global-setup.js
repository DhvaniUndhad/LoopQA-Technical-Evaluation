const{chromium,expect} = require('@playwright/test')
const { config } = require("process")

module.exports = async config =>{
    const browser = await chromium.launch()
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/")
    await page.locator("input[type='text']").fill("admin")
    await page.locator("input[type='password']").fill("password123")
    await page.locator("button[type='submit']").click()
    const mainPage = await page.locator("(//h1)[2]")
    await expect(mainPage).toHaveText("Web Application")
    await page.context().storageState({path:"user.json"})
    await browser.close()
}
