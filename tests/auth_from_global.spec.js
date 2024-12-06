const{test,expect} = require('@playwright/test')
const exp = require('constants')
const testData = require('./testData.json');
const { randomBytes } = require('crypto');
const url = "https://animated-gingersnap-8cf7f2.netlify.app/"

test.describe("Authentication for Web Application", ()=>{
    const webContent = testData.WebApplication
    for (const data of webContent) {
    test(`Test Case ${data.id} for ${data.expected}`, async function ({page}) {
    await page.goto(url)
    const webApp = await page.locator(data.elementLocator).textContent()
    expect(webApp).toBe(data.expected)
});
} 
});

test.describe("Authentication for Mobile Application", ()=>{
    const mobContent = testData.MobileApplication
    for (const data of mobContent) {
    test(`Test Case ${data.id} for ${data.expected}`, async function ({page}) {
    await page.goto(url)
    await page.getByText("Mobile Application").click()
    const webApp = await page.locator(data.elementLocator).textContent()
    expect(webApp).toBe(data.expected)
});
} 
});

