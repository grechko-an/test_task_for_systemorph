"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class BasePage {
    constructor() {
        this._pageBody = protractor_1.element(protractor_1.by.css('body'));
        this._mainLogo = protractor_1.element(protractor_1.by.css('div[id="logo"] a img'));
        this._siteHeader = protractor_1.element(protractor_1.by.css('div[class="siteHeader"]'));
    }
    ;
    async IsSignedOut() {
        let id = await this._pageBody.getAttribute('id');
        if (id == "signedOutHome") {
            return true;
        }
        else {
            return false;
        }
        ;
    }
    ;
}
exports.BasePage = BasePage;
//# sourceMappingURL=basePage.po.js.map