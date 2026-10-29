import {test} from "@playwright/test"


test("Alerts and Popup's", async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.pause();
    console.log("I Launched the url and i reached the home page")
    await page.getByText('Alerts & Popups').scrollIntoViewIfNeeded();
    // await page.pause();
    console.log("I found Alert and popup section.....")

    let alert = await page.getByText('Simple Alert').click();

    // await page.keyboard.press("Enter")

    page.on('dialog', async dialog => { await dialog.accept(); });

    console.log("Alert Accepted")



});