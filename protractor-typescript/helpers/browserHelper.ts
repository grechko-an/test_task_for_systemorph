import { ElementFinder, ElementArrayFinder, protractor, browser, ProtractorBrowser } from 'protractor'
import { promise as wdpromise } from 'selenium-webdriver'

const EC = protractor.ExpectedConditions;
const timeout = 60000;
const speedCheckTimeout = 4000;

class BrowserHelper {

    public async WaitElementClikable(element: ElementFinder): Promise<void>{
        await browser.wait(EC.elementToBeClickable(element), timeout);
    }

    public async WaitElementVisible(element: ElementFinder): Promise<void>{
        await browser.wait(EC.visibilityOf(element), timeout);
    }

    public async CheckLoadSpeed(element: ElementFinder): Promise<void>{
        await browser.wait(EC.visibilityOf(element), speedCheckTimeout);
    }

}

export let browserHelper: BrowserHelper = new BrowserHelper();