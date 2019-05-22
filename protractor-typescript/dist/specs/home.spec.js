"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homePage_po_1 = require("../pages/homePage.po");
const browserHelper_1 = require("../helpers/browserHelper");
//chai.use(require('chai-smoothie'));
//const expect = chai.expect;
describe('Home Page', () => {
    const homePage = new homePage_po_1.HomePage();
    it('Home page should be opened', async () => {
        await browserHelper_1.browserHelper.WaitElementVisible(homePage.mainLogo);
        expect(homePage.mainLogo.isPresent()).toBe(true);
        await browserHelper_1.browserHelper.WaitElementVisible(homePage.siteSloganText);
        expect(homePage.siteSloganText.isPresent()).toBe(true);
    });
});
//# sourceMappingURL=home.spec.js.map