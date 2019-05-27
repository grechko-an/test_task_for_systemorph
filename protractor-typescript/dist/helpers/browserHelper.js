"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const EC = protractor_1.protractor.ExpectedConditions;
const timeout = 60000;
const speedCheckTimeout = 4000;
class BrowserHelper {
    async WaitElementClikable(element) {
        await protractor_1.browser.wait(EC.elementToBeClickable(element), timeout);
    }
    async WaitElementVisible(element) {
        await protractor_1.browser.wait(EC.visibilityOf(element), timeout);
    }
    async CheckLoadSpeed(element) {
        await protractor_1.browser.wait(EC.visibilityOf(element), speedCheckTimeout);
    }
}
exports.browserHelper = new BrowserHelper();
//# sourceMappingURL=browserHelper.js.map