import { chromium } from 'playwright';

export async function generatePdf(html: string) {
    try {
        const browser = await chromium.launch({ headless: false });
        const page = await browser.newPage();
        await page.setContent(html);
        await page.screenshot({ path: `example.png` });
        // const buffer = page.pdf();
        await browser.close();
    } catch (error) {
        throw new Error(`${error}`);
    }
}
