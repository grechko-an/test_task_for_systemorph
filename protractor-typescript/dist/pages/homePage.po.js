"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browserHelper_1 = require("../helpers/browserHelper");
const basePage_po_1 = require("../pages/basePage.po");
const signedOutPage_po_1 = require("../pages/signedOutPage.po");
const signUpPage_po_1 = require("../pages/signUpPage.po");
const gettingStartedPage_po_1 = require("../pages/gettingStartedPage.po");
const basePage = new basePage_po_1.BasePage();
const signedOutPage = new signedOutPage_po_1.SignedOutPage();
const signUpPage = new signUpPage_po_1.SignUp();
const gettingStartedPage = new gettingStartedPage_po_1.GettingStartedPage();
class HomePage {
    constructor() {
        this._siteSloganText = protractor_1.element(protractor_1.by.css('div[id="headline"] img'));
        this._signInForm = protractor_1.element(protractor_1.by.id('signInForm'));
        this._promoHeader = protractor_1.element(protractor_1.by.css('div[class="promoHeader__promoMastheadLogoContainer"]'));
        this._signUpBtn = protractor_1.element(protractor_1.by.css('input[value="Sign up"]'));
        this._accountImage = protractor_1.element(protractor_1.by.css('div[class="dropdown dropdown--profileMenu"] a span img'));
        this._signOutBtn = protractor_1.element.all(protractor_1.by.css('div[class*="siteHeader__subNav siteHeader"] li[role="menuitem"]')).last();
        this._signUpNameFld = protractor_1.element(protractor_1.by.id('user_first_name'));
        this._signUpEmailFld = protractor_1.element(protractor_1.by.id('user_email'));
        this._signUpPassFld = protractor_1.element(protractor_1.by.id('user_password_signup'));
        this._homeBtn = protractor_1.element(protractor_1.by.xpath('//nav[@class="siteHeader__primaryNavInline"]//a[text()="Home"]'));
    }
    ;
    async signUpOnHomepage(name, email, password) {
        await browserHelper_1.browserHelper.WaitElementClikable(this._signUpBtn);
        await this._signUpBtn.click();
        await this._signUpNameFld.click();
        await this._signUpNameFld.sendKeys(name);
        await this._signUpEmailFld.click();
        await this._signUpEmailFld.sendKeys(email);
        await this._signUpPassFld.click();
        await this._signUpPassFld.sendKeys(password);
        await this._signUpBtn.click();
        await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
        await signUpPage.checkIsNameFieldHaveCorrectUserData(name);
        await signUpPage.checkIsEmailFieldHaveCorrectUserData(email);
        await signUpPage.checkIsPasswordFieldHaveCorrectUserData(password);
        await browserHelper_1.browserHelper.WaitElementClikable(signUpPage._captchaCbx);
        await signUpPage._captchaCbx.click();
        await protractor_1.browser.sleep(3000);
        await signUpPage._signUpBtn.click();
        await browserHelper_1.browserHelper.WaitElementVisible(gettingStartedPage._gettingStarted);
        await browserHelper_1.browserHelper.WaitElementClikable(basePage._mainLogo);
        await basePage._mainLogo.click();
    }
    ;
    async signOut() {
        await browserHelper_1.browserHelper.WaitElementClikable(this._accountImage);
        await this._accountImage.click();
        await browserHelper_1.browserHelper.WaitElementClikable(this._signOutBtn);
        await this._signOutBtn.click();
        await browserHelper_1.browserHelper.WaitElementVisible(signedOutPage._signedOutTxt);
        await browserHelper_1.browserHelper.WaitElementClikable(signedOutPage._goodreadsHomeLnk);
        await signedOutPage._goodreadsHomeLnk.click();
    }
    ;
    async getAccountName() {
        await this._accountImage.click();
        await this._accountName.getAttribute("textContent");
        return;
    }
    ;
}
exports.HomePage = HomePage;
//# sourceMappingURL=homePage.po.js.map