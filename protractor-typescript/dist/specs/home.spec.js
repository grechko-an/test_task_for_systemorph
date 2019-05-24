"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const basePage_po_1 = require("../pages/basePage.po");
const homePage_po_1 = require("../pages/homePage.po");
const browserHelper_1 = require("../helpers/browserHelper");
const signUpPage_po_1 = require("../pages/signUpPage.po");
const dataHelper_1 = require("../data/dataHelper");
const modalPopup_po_1 = require("../pages/modalPopup.po");
const gettingStartedPage_po_1 = require("../pages/gettingStartedPage.po");
const signedOutPage_po_1 = require("../pages/signedOutPage.po");
//chai.use(require('chai-smoothie'));
//const expect = chai.expect;
describe('Home Page', () => {
    const basePage = new basePage_po_1.BasePage();
    const homePage = new homePage_po_1.HomePage();
    const signUpPage = new signUpPage_po_1.SignUp();
    const dataHelper = new dataHelper_1.DataHelper();
    const modalPopup = new modalPopup_po_1.ModalPopup();
    const gettingStartedPage = new gettingStartedPage_po_1.GettingStartedPage();
    const signedOutPage = new signedOutPage_po_1.SignedOutPage();
    describe('Smoke test', () => {
        it('Home page should be opened', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._promoHeader);
            expect(await homePage._promoHeader.isPresent()).toBe(true);
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signInForm);
            expect(await homePage._signInForm.isPresent()).toBe(true);
        });
    });
    describe('Sign up and Sign out features', () => {
        it('Should Sign up via Home page with correct user data', async () => {
            await homePage.signUpOnHomepage(dataHelper._username, dataHelper._correctEmail, dataHelper._correctPass);
            await modalPopup.closeHomeModalPopup();
            expect(await homePage._accountImage.isPresent()).toBe(true);
            expect(await basePage.isSignedOut()).toBe(false);
            expect(await homePage.getAccountName()).toEqual(dataHelper._username);
        });
        xit('Should directly Sign up via Sign up page with correct user data', async () => {
            if (!basePage.isSignedOut()) {
                await homePage._homeBtn.click();
                await modalPopup.closeHomeModalPopup();
                await homePage.signOut();
            }
            await browserHelper_1.browserHelper.WaitElementClikable(homePage._signUpBtn);
            await homePage._signUpBtn.click();
            await signUpPage.signUpOnSignUpPage(dataHelper._username, dataHelper._correctEmail, dataHelper._correctPass);
            await modalPopup.closeHomeModalPopup();
            expect(await homePage._accountImage.isPresent()).toBe(true);
            expect(await basePage.isSignedOut()).toBe(false);
            expect(await homePage.getAccountName()).toEqual(dataHelper._username);
        });
        xit('Should Sign out well', async () => {
            if (basePage.isSignedOut()) {
                await basePage._mainLogo.click();
                await browserHelper_1.browserHelper.WaitElementClikable(homePage._signUpBtn);
                await homePage._signUpBtn.click();
                await signUpPage.signUpOnSignUpPage(dataHelper._username, dataHelper._correctEmail, dataHelper._correctPass);
                await modalPopup.closeHomeModalPopup();
            }
            await homePage._homeBtn.click();
            await modalPopup.closeHomeModalPopup();
            await homePage.signOut();
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signInForm);
            expect(await homePage._signInForm.isPresent()).toBe(true);
            expect(await homePage._promoHeader.isPresent()).toBe(true);
            expect(await basePage.isSignedOut()).toBe(true);
        });
        xit('Should get consistant alert when try to Sign up with all blank fields', async () => {
            await browserHelper_1.browserHelper.WaitElementClikable(homePage._signUpBtn);
            await homePage._signUpBtn.click();
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            await browserHelper_1.browserHelper.WaitElementClikable(signUpPage._captchaCbx);
            await signUpPage._captchaCbx.click();
            await protractor_1.browser.sleep(3000);
            await signUpPage._signUpBtn.click();
            expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
        });
        xit('Should get consistant alert when try to Sign up with blank Name field', async () => {
            await signUpPage.clearFlds();
            await signUpPage.typeEmailOnSignUpPage(dataHelper._correctEmail);
            await signUpPage.typePasswordOnSignUpPage(dataHelper._correctPass);
            await this._captchaCbx.click();
            await protractor_1.browser.sleep(3000);
            await this._signUpBtn.click();
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
        });
        xit('Should get consistant alert when try to Sign up with blank Email field', async () => {
            await signUpPage.typeNameOnSignUpPage(dataHelper._username);
            await signUpPage.typePasswordOnSignUpPage(dataHelper._correctPass);
            await this._captchaCbx.click();
            await protractor_1.browser.sleep(3000);
            await this._signUpBtn.click();
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter an email address to sign up for Goodreads.");
        });
        xit('Should get consistant alert when try to Sign up with blank Password field', async () => {
            await signUpPage.clearFlds();
            await signUpPage.typeNameOnSignUpPage(dataHelper._username);
            await signUpPage.typeEmailOnSignUpPage(dataHelper._correctEmail);
            await this._captchaCbx.click();
            await protractor_1.browser.sleep(3000);
            await signUpPage._signUpBtn.click();
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a password of six or more characters");
        });
        xit('Should get consistant alert when try to Sign up without Captcha', async () => {
            await signUpPage.clearFlds();
            await signUpPage.typeNameOnSignUpPage(dataHelper._username);
            await signUpPage.typeEmailOnSignUpPage(dataHelper._correctEmail);
            await signUpPage.typePasswordOnSignUpPage(dataHelper._correctPass);
            await signUpPage._signUpBtn.click();
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            expect(await signUpPage._alertTxt.getText()).toEqual(" CAPTCHA response is incorrect. Please try again.");
        });
        xit('Should get consistant alert when try to Sign up with invalid Email', async () => {
            await signUpPage.clearFlds();
            await signUpPage.typeNameOnSignUpPage(dataHelper._username);
            await signUpPage.typeEmailOnSignUpPage(dataHelper._invalidEmail);
            await signUpPage.typePasswordOnSignUpPage(dataHelper._correctPass);
            await this._captchaCbx.click();
            await protractor_1.browser.sleep(3000);
            await signUpPage._signUpBtn.click();
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            expect(await signUpPage._signUpEmailFld.getAttribute('validationMessage')).toEqual("Please include an '@' in the email address. 'parker1983gmail.com' is missing an '@'.");
        });
        xit('Should get consistant alert when try to Sign up with invalid Password', async () => {
            await signUpPage.clearFlds();
            await signUpPage.typeNameOnSignUpPage(dataHelper._username);
            await signUpPage.typeEmailOnSignUpPage(dataHelper._invalidEmail);
            await signUpPage.typePasswordOnSignUpPage(dataHelper._invalidPass);
            await signUpPage._captchaCbx.click();
            await protractor_1.browser.sleep(3000);
            await signUpPage._signUpBtn.click();
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a password of six or more characters");
        });
    });
});
//# sourceMappingURL=home.spec.js.map