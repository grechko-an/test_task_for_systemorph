"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browserHelper_1 = require("../helpers/browserHelper");
class ForgotPassword {
    constructor() {
        this._titleText = protractor_1.element(protractor_1.by.css('p[class="intro"]'));
        this._emailFld = protractor_1.element(protractor_1.by.id('user_email'));
        this._resetPassBtn = protractor_1.element(protractor_1.by.css('input[name="next"]'));
        this._resultMsg = protractor_1.element(protractor_1.by.css('p[class="intro"]'));
    }
    ;
    async ResetPass(email) {
        await browserHelper_1.browserHelper.WaitElementVisible(this._titleText);
        await browserHelper_1.browserHelper.WaitElementClikable(this._emailFld);
        await this._emailFld.click();
        await this._emailFld.sendKeys(email);
        await this._resetPassBtn.click();
        await browserHelper_1.browserHelper.WaitElementVisible(this._resultMsg);
    }
    ;
}
exports.ForgotPassword = ForgotPassword;
//# sourceMappingURL=forgotPasswordPage.po.js.map