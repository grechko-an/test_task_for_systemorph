"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browserHelper_1 = require("../helpers/browserHelper");
const basePage_po_1 = require("../pages/basePage.po");
const gettingStartedPage_po_1 = require("../pages/gettingStartedPage.po");
const basePage = new basePage_po_1.BasePage();
const gettingStartedPage = new gettingStartedPage_po_1.GettingStartedPage();
class SignUp {
    constructor() {
        this._pageTitle = protractor_1.element(protractor_1.by.css('div[class="column_right"] h1'));
        this._signUpWithEmail = protractor_1.element(protractor_1.by.css('div[class="signup"]'));
        this._signUpNameFld = protractor_1.element(protractor_1.by.id('user_first_name'));
        this._signUpEmailFld = protractor_1.element(protractor_1.by.id('user_email'));
        this._signUpPassFld = protractor_1.element(protractor_1.by.id('user_password'));
        this._signUpBtn = protractor_1.element(protractor_1.by.css('input[value="Sign up"]'));
        this._captchaCbx = protractor_1.element(protractor_1.by.id('recaptcha-anchor'));
        this._alertTxt = protractor_1.element(protractor_1.by.css('p[class="flash notice"]'));
    }
    async clearFlds() {
        await this._signUpNameFld.clear();
        await this._signUpEmailFld.clear();
        await this._signUpPassFld.clear();
    }
    async signUpOnSignUpPage(name, email, password) {
        await browserHelper_1.browserHelper.WaitElementVisible(this._pageTitle);
        await this._signUpNameFld.click();
        await this._signUpNameFld.sendKeys(name);
        await this._signUpEmailFld.click();
        await this._signUpEmailFld.sendKeys(email);
        await this._signUpPassFld.click();
        await this._signUpPassFld.sendKeys(password);
        await browserHelper_1.browserHelper.WaitElementClikable(this._captchaCbx);
        await this._captchaCbx.click();
        await protractor_1.browser.sleep(3000);
        await this._signUpBtn.click();
        await browserHelper_1.browserHelper.WaitElementVisible(gettingStartedPage._gettingStarted);
        await browserHelper_1.browserHelper.WaitElementClikable(basePage._mainLogo);
        await basePage._mainLogo.click();
    }
    async typeNameOnSignUpPage(name) {
        await this._signUpNameFld.click();
        await this._signUpNameFld.sendKeys(name);
        await browserHelper_1.browserHelper.WaitElementClikable(this._captchaCbx);
        await this._captchaCbx.click();
        await protractor_1.browser.sleep(3000);
    }
    async typeEmailOnSignUpPage(email) {
        await this._signUpEmailFld.click();
        await this._signUpEmailFld.sendKeys(email);
        await browserHelper_1.browserHelper.WaitElementClikable(this._captchaCbx);
        await this._captchaCbx.click();
        await protractor_1.browser.sleep(3000);
    }
    async typePasswordOnSignUpPage(password) {
        await this._signUpPassFld.click();
        await this._signUpPassFld.sendKeys(password);
        await browserHelper_1.browserHelper.WaitElementClikable(this._captchaCbx);
        await this._captchaCbx.click();
        await protractor_1.browser.sleep(3000);
    }
    async checkIsNameFieldHaveCorrectUserData(name) {
        try {
            expect(this._signUpNameFld.getAttribute('value')).toEqual(name);
        }
        catch (e) {
            console.log('Name field in Sign Up page does not match with Name typed on Home page', e);
        }
    }
    async checkIsEmailFieldHaveCorrectUserData(email) {
        try {
            expect(this._signUpEmailFld.getAttribute('value')).toEqual(email);
        }
        catch (e) {
            console.log('Email in Sign Up page does not match with Email typed on Home page', e);
        }
    }
    async checkIsPasswordFieldHaveCorrectUserData(password) {
        try {
            expect(this._signUpPassFld.getAttribute('value')).toEqual(password);
        }
        catch (e) {
            console.log('Password in Sign Up page does not match with Password typed on Home page', e);
        }
    }
}
exports.SignUp = SignUp;
//# sourceMappingURL=signUpPage.po.js.map