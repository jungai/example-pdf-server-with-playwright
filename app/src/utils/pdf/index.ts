import { Browser, chromium } from 'playwright';

export async function generatePdf(html: string) {
    let browser: Browser | undefined;

    try {
        browser = await chromium.launch({ headless: true });
        const page = await browser.newPage();
        await page.setContent(html);
        await page.screenshot({ path: `example.png` });
        // const buffer = page.pdf();
        await browser.close();
    } catch (error) {
        browser?.close;
        throw new Error(`${error}`);
    }
}
