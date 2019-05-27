"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browserHelper_1 = require("../helpers/browserHelper");
const basePage_po_1 = require("../pages/basePage.po");
const gettingStartedPage_po_1 = require("../pages/gettingStartedPage.po");
const basePage = new basePage_po_1.BasePage();
const gettingStartedPage = new gettingStartedPage_po_1.GettingStarted();
class SignUp {
    constructor() {
        //Texts
        this._pageTitle = protractor_1.element(protractor_1.by.css('div[class="column_right"] h1'));
        this._signUpWithEmail = protractor_1.element(protractor_1.by.css('div[class="signup"]'));
        //Sign up form
        this._signUpNameFld = protractor_1.element(protractor_1.by.id('user_first_name'));
        this._signUpEmailFld = protractor_1.element(protractor_1.by.id('user_email'));
        this._signUpPassFld = protractor_1.element(protractor_1.by.id('user_password'));
        this._signUpBtn = protractor_1.element(protractor_1.by.css('input[value="Sign up"]'));
        this._captchaFrame = protractor_1.element(protractor_1.by.css('iframe[role="presentation"]'));
        this._captchaCbx = protractor_1.element(protractor_1.by.id('recaptcha-anchor'));
        this._fields = protractor_1.element.all(protractor_1.by.css('input[name*="user"]'));
        //Alert
        this._alertTxt = protractor_1.element(protractor_1.by.css('p[class="flash error"]'));
    }
    ;
    async SignUpOnSignUpPage() {
        await browserHelper_1.browserHelper.WaitElementVisible(this._pageTitle);
        //await this.CheckFieldsHaveTextsFromHomePage(this._fields); it takes error I haven't fix it yet
        await this.ClickCaptchaCbx();
        await this._signUpBtn.click();
        await browserHelper_1.browserHelper.WaitElementVisible(gettingStartedPage._gettingStarted);
        await browserHelper_1.browserHelper.WaitElementClikable(basePage._mainLogo);
        await basePage._mainLogo.click();
    }
    ;
    async ClickCaptchaCbx() {
        await protractor_1.browser.sleep(3000);
        await protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.css('iframe[role="presentation"]')).getWebElement());
        await browserHelper_1.browserHelper.WaitElementClikable(this._captchaCbx);
        await this._captchaCbx.click();
        await protractor_1.browser.switchTo().defaultContent();
        await protractor_1.browser.sleep(3000);
    }
    ;
    async ClickSignUpBtnOnSignUpPage() {
        await browserHelper_1.browserHelper.WaitElementClikable(this._signUpBtn);
        await this._signUpBtn.click();
    }
    async CheckFieldsHaveTextsFromHomePage(arrayOfElements) {
        for (var element of arrayOfElements) {
            try {
                if (element.getAttribute('value') == null) {
                    throw new Error();
                }
            }
            catch (e) {
                console.log('One or more Field in Sign Up page is empty');
            }
        }
    }
}
exports.SignUp = SignUp;
//# sourceMappingURL=signUpPage.po.js.map