"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const basePage_po_1 = require("../pages/basePage.po");
const homePage_po_1 = require("../pages/homePage.po");
const browserHelper_1 = require("../helpers/browserHelper");
const signUpPage_po_1 = require("../pages/signUpPage.po");
const signInPage_to_1 = require("../pages/signInPage.to");
const dataHelper_1 = require("../helpers/dataHelper");
const modalPopup_po_1 = require("../pages/modalPopup.po");
const forgotPasswordPage_po_1 = require("../pages/forgotPasswordPage.po");
describe('Home Page', () => {
    const EC = protractor_1.protractor.ExpectedConditions;
    const basePage = new basePage_po_1.BasePage();
    const homePage = new homePage_po_1.HomePage();
    const signUpPage = new signUpPage_po_1.SignUp();
    const signInPage = new signInPage_to_1.SignIn();
    const dataHelper = new dataHelper_1.DataHelper();
    const modalPopup = new modalPopup_po_1.ModalPopup();
    const forgotPasswordPage = new forgotPasswordPage_po_1.ForgotPassword();
    describe('Smoke test', () => {
        it('Home page should be opened', async () => {
            await browserHelper_1.browserHelper.CheckLoadSpeed(homePage._homePage); //This step is some sort of load speed testing
            await browserHelper_1.browserHelper.WaitElementVisible(basePage._mainLogo);
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signInForm);
            expect(await basePage._mainLogo.isDisplayed()).toBe(true);
            expect(await homePage._signInForm.isDisplayed()).toBe(true);
        });
    });
    describe('Sign up and Sign out features', () => {
        xit('Should Sign up via Home page with correct user data', async () => {
            await homePage.SignUpOnHomePage(dataHelper._username, dataHelper._correctEmail, dataHelper._correctPass);
            await signUpPage.SignUpOnSignUpPage();
            await modalPopup.CloseHomeModalPopup();
            expect(await homePage._accountImage.isPresent()).toBe(true);
            expect(await homePage.GetAccountName()).toEqual(dataHelper._username);
            expect(await basePage.IsSignedOut()).toBe(false);
        });
        xit('Should Sign out well', async () => {
            await homePage.ClickAccountImage();
            await homePage.SignOut();
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signInForm);
            expect(await homePage._signInForm.isPresent()).toBe(true);
            expect(await homePage._promoHeader.isPresent()).toBe(true);
            expect(await basePage.IsSignedOut()).toBe(true);
        });
        xit('Should get consistant alert when try to Sign up with blank fields', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signUpForm);
            await homePage.ClickSignUpBtnOnHomePage();
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            await signUpPage.ClickCaptchaCbx();
            await signUpPage.ClickSignUpBtnOnSignUpPage();
            expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
            await protractor_1.browser.navigate().back();
        });
        xit('Should get consistant alert when try to Sign up with blank Name field', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signUpForm);
            await homePage.SignUpOnHomePage(null, dataHelper._correctEmail, dataHelper._correctPass);
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            await signUpPage.ClickCaptchaCbx();
            await signUpPage.ClickSignUpBtnOnSignUpPage();
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
            await protractor_1.browser.navigate().back();
        });
        xit('Should get consistant alert when try to Sign up with blank Email field', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signUpForm);
            await homePage.SignUpOnHomePage(dataHelper._username, null, dataHelper._correctPass);
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            await signUpPage.ClickCaptchaCbx();
            await signUpPage.ClickSignUpBtnOnSignUpPage();
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter an email address to sign up for Goodreads.");
            await protractor_1.browser.navigate().back();
        });
        //Will fall because of bug with posibility to sign up without password
        xit('Should get consistant alert when try to Sign up with blank Password field', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signUpForm);
            await homePage.SignUpOnHomePage(dataHelper._username, dataHelper._correctEmail, null);
            await signUpPage.ClickCaptchaCbx();
            await signUpPage.ClickSignUpBtnOnSignUpPage();
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a password of six or more characters");
            await protractor_1.browser.navigate().back();
        });
        xit('Should get consistant alert when try to Sign up with blank Name and Email fields', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signUpForm);
            await homePage.SignUpOnHomePage(null, null, dataHelper._correctPass);
            await signUpPage.ClickCaptchaCbx();
            await signUpPage.ClickSignUpBtnOnSignUpPage();
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
            await protractor_1.browser.navigate().back();
        });
        xit('Should get consistant alert when try to Sign up with blank Name and Password fields', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signUpForm);
            await homePage.SignUpOnHomePage(null, dataHelper._correctEmail, null);
            await signUpPage.ClickCaptchaCbx();
            await signUpPage.ClickSignUpBtnOnSignUpPage();
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
            await protractor_1.browser.navigate().back();
        });
        xit('Should get consistant alert when try to Sign up with blank Email and Password fields', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signUpForm);
            await homePage.SignUpOnHomePage(dataHelper._username, null, null);
            await signUpPage.ClickCaptchaCbx();
            await signUpPage.ClickSignUpBtnOnSignUpPage();
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter an email address to sign up for Goodreads.");
            await protractor_1.browser.navigate().back();
        });
        xit('Should get consistant alert when try to Sign up without Captcha', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signUpForm);
            await homePage.SignUpOnHomePage(dataHelper._username, dataHelper._correctEmail, dataHelper._correctPass);
            await signUpPage.ClickSignUpBtnOnSignUpPage();
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            expect(await signUpPage._alertTxt.getAttribute('innerText')).toEqual("CAPTCHA response is incorrect. Please try again.");
            //await browser.driver.navigate().back();
            await basePage.goToHomePageFromSignPages();
        });
        xit('Should get consistant alert when try to Sign up with invalid Email and Password', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signUpForm);
            await homePage.SignUpOnHomePage(dataHelper._username, dataHelper._invalidEmail, dataHelper._invalidPass);
            expect(await homePage._signUpEmailFld.getAttribute('validationMessage')).toEqual("Please include an '@' in the email address. 'parker1983gmail.com' is missing an '@'.");
            await protractor_1.browser.refresh();
        });
        xit('Should get consistant alert when try to Sign up with invalid Email', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signUpForm);
            await homePage.SignUpOnHomePage(dataHelper._username, dataHelper._invalidEmail, dataHelper._correctPass);
            expect(await homePage._signUpEmailFld.getAttribute('validationMessage')).toEqual("Please include an '@' in the email address. 'parker1983gmail.com' is missing an '@'.");
            await protractor_1.browser.refresh();
        });
        //Will fall because of bug with password transition into SignUp page
        xit('Should get consistant alert when try to Sign up with invalid Password', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signUpForm);
            await homePage.SignUpOnHomePage(dataHelper._username, dataHelper._correctEmail, dataHelper._invalidPass);
            await signUpPage.ClickCaptchaCbx();
            await signUpPage.ClickSignUpBtnOnSignUpPage();
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a password of six or more characters");
            await protractor_1.browser.navigate().back();
        });
        it('Should get consistant alert when try to Sign up with invalid Email and blank Password', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signUpForm);
            await homePage.SignUpOnHomePage(dataHelper._username, dataHelper._invalidEmail, "");
            expect(await homePage._signUpEmailFld.getAttribute('validationMessage')).toEqual("Please include an '@' in the email address. 'parker1983gmail.com' is missing an '@'.");
            await protractor_1.browser.refresh();
        });
        xit('Should get consistant alert when try to Sign up with invalid Password and blank Email', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signUpForm);
            await homePage.SignUpOnHomePage(dataHelper._username, null, dataHelper._invalidPass);
            await signUpPage.ClickCaptchaCbx();
            await signUpPage.ClickSignUpBtnOnSignUpPage();
            await browserHelper_1.browserHelper.WaitElementVisible(signUpPage._pageTitle);
            expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter an email address to sign up for Goodreads.");
        });
    });
    xdescribe('Sign in feature', () => {
        it('Should Sign in via Home page with correct user data', async () => {
            await protractor_1.browser.navigate().back();
            await homePage.SignInOnHomepage(dataHelper._correctEmailForSignIn, dataHelper._correctPassForSignIn);
            await modalPopup.CloseHomeModalPopup();
            expect(await homePage._accountImage.isPresent()).toBe(true);
            expect(await basePage.IsSignedOut()).toBe(false);
            expect(await homePage.GetAccountName()).toEqual(dataHelper._username);
        });
        it('Should get consistant alert when try to Sign in with all blank fields', async () => {
            await homePage.ClickAccountImage();
            await homePage.SignOut();
            await homePage.SignInOnHomepage(null, null);
            await browserHelper_1.browserHelper.WaitElementVisible(signInPage._alertTxt);
            expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
            await protractor_1.browser.navigate().back();
        });
        it('Should get consistant alert when try to Sign in with blank Email field', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signInForm);
            await homePage.SignInOnHomepage(null, dataHelper._correctPassForSignIn);
            await browserHelper_1.browserHelper.WaitElementVisible(signInPage._alertTxt);
            expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
            await protractor_1.browser.navigate().back();
        });
        it('Should get consistant alert when try to Sign in with blank Password field', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signInForm);
            await homePage.SignInOnHomepage(dataHelper._correctEmailForSignIn, null);
            await browserHelper_1.browserHelper.WaitElementVisible(signInPage._alertTxt);
            expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
            await protractor_1.browser.navigate().back();
        });
        it('Should get consistant alert when try to Sign up with incorrect Email', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signInForm);
            await homePage.SignInOnHomepage(dataHelper._incorrectEmail, dataHelper._correctPassForSignIn);
            await browserHelper_1.browserHelper.WaitElementVisible(signInPage._alertTxt);
            expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
            await protractor_1.browser.navigate().back();
        });
        it('Should get consistant alert when try to Sign up with incorrect Password', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signInForm);
            await homePage.SignInOnHomepage(dataHelper._correctEmailForSignIn, dataHelper._incorrectPass);
            await browserHelper_1.browserHelper.WaitElementVisible(signInPage._alertTxt);
            expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
            await protractor_1.browser.navigate().back();
        });
        it('Should get consistant alert when try to Sign up with invalid Email', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signInForm);
            await homePage.SignInOnHomepage(dataHelper._invalidEmail, dataHelper._correctPassForSignIn);
            expect(await basePage._mainLogo.isPresent()).toBe(true);
            expect(await homePage._signInEmailFld.getAttribute('validationMessage')).toEqual("Please include an '@' in the email address. 'parker1983gmail.com' is missing an '@'.");
            await protractor_1.browser.navigate().back();
        });
        it('Should get consistant alert when try to Sign up with invalid Password', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signInForm);
            await homePage.SignInOnHomepage(dataHelper._correctEmailForSignIn, dataHelper._invalidPass);
            await browserHelper_1.browserHelper.WaitElementVisible(signInPage._alertTxt);
            expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
            await protractor_1.browser.navigate().back();
        });
        it('Should be Signed in when Remember me feature is on', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signInForm);
            if (!await homePage._rememberMeCbx.isSelected()) {
                await homePage._rememberMeCbx.click();
            }
            await homePage.SignInOnHomepage(dataHelper._correctEmailForSignIn, dataHelper._correctPassForSignIn);
            await modalPopup.CloseHomeModalPopup();
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._accountImage);
            await protractor_1.browser.refresh();
            await modalPopup.CloseHomeModalPopup();
            expect(await homePage._accountImage.isPresent()).toBe(true);
            expect(await basePage.IsSignedOut()).toBe(false);
            expect(await homePage.GetAccountName()).toEqual(dataHelper._username);
        });
        it('Should be able to reset Password via Forgot feature', async () => {
            await homePage.ClickAccountImage();
            await homePage.SignOut();
            await browserHelper_1.browserHelper.WaitElementClikable(homePage._forgotItLnk);
            await homePage.ClickForgotLnk();
            await forgotPasswordPage.ResetPass(dataHelper._correctEmail);
            expect(await forgotPasswordPage._resultMsg).toContain(" We'll send instructions to this email");
        });
        //Sign in with social networks test are disabled because of lack of valid accounts
        xit('Should Sign in via Facebook', async () => {
            await protractor_1.browser.navigate().back();
            await homePage.SignInWithFB(dataHelper._socialNetworksLogin, dataHelper._socialNetworksPass);
            await modalPopup.CloseHomeModalPopup();
            expect(await homePage._accountImage.isPresent()).toBe(true);
            expect(await basePage.IsSignedOut()).toBe(false);
        });
        xit('Should Sign in via Twitter', async () => {
            await protractor_1.browser.navigate().back();
            await homePage.ClickAccountImage();
            await homePage.SignOut();
            await homePage.SignInWithTwitter(dataHelper._socialNetworksLogin, dataHelper._socialNetworksPass);
            await modalPopup.CloseHomeModalPopup();
            expect(await homePage._accountImage.isPresent()).toBe(true);
            expect(await basePage.IsSignedOut()).toBe(false);
        });
        xit('Should Sign in via Google', async () => {
            await protractor_1.browser.navigate().back();
            await homePage.ClickAccountImage();
            await homePage.SignOut();
            await homePage.SignInWithGoogle(dataHelper._socialNetworksLogin, dataHelper._socialNetworksPass);
            await modalPopup.CloseHomeModalPopup();
            expect(await homePage._accountImage.isPresent()).toBe(true);
            expect(await basePage.IsSignedOut()).toBe(false);
        });
        xit('Should Sign in via Amazon', async () => {
            await protractor_1.browser.navigate().back();
            await homePage.ClickAccountImage();
            await homePage.SignOut();
            await homePage.SignInWithAmazon(dataHelper._socialNetworksLogin, dataHelper._socialNetworksPass);
            await modalPopup.CloseHomeModalPopup();
            expect(await homePage._accountImage.isPresent()).toBe(true);
            expect(await basePage.IsSignedOut()).toBe(false);
        });
    });
    xdescribe('Header block', () => {
        it('Link in Header block should work well', async () => {
            await protractor_1.browser.navigate().back();
            await browserHelper_1.browserHelper.WaitElementVisible(basePage._siteHeader);
            await browserHelper_1.browserHelper.WaitElementClikable(basePage._mainLogo);
            await basePage._mainLogo.click();
            expect(await protractor_1.browser.getCurrentUrl()).toEqual(dataHelper._homePageUrl);
            expect(await basePage._siteHeader.isDisplayed()).toBe(true);
        });
    });
    xdescribe('Promo block', () => {
        it('Promo image should link to Promo page', async () => {
            await protractor_1.browser.navigate().back();
            if (homePage._promoHeader.isDisplayed()) {
                await homePage.GoToPromoPage(homePage._promoHeader);
                expect(protractor_1.browser.getCurrentUrl()).toContain("www.goodreads.com/blog/show");
                await protractor_1.browser.navigate().back();
            }
        });
    });
    xdescribe('Best books block', () => {
        it('Buttons in Best books bloock should work well', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signInForm);
            if (homePage._bestBooksBlock.isDisplayed()) {
                await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._bestBooksBtns);
            }
        });
        it('Links in Best books bloock should work well', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signInForm);
            if (homePage._bestBooksBlock.isDisplayed()) {
                await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._bestBooksLnks);
            }
        });
    });
    xdescribe('Questions text block', () => {
        it('Questions and answers text block should be displayed', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._signInForm);
            await homePage.TextsArePresent(homePage._qtbFirstQuestion, homePage._qtbSecondQuestion, homePage._qtbFirstAnswer, homePage._qtbSecondAnswer);
        });
    });
    xdescribe('Discovery block', () => {
        it('Links in Discovery block should work well', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._discoveryBlock);
            await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._discoverySimilarLnks);
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._discoveryBlock);
            await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._discoveryReflectedLnks);
        });
    });
    xdescribe('Seearch and browse block', () => {
        it('Links in Search and browse block should work well', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._searchBlock);
            await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._searchLnks);
        });
        it('Search feature should work well', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._searchBlock);
            await homePage.FillSearchFld(dataHelper._searchWord);
            expect(await protractor_1.browser.getCurrentUrl()).toContain("/search");
            expect(await protractor_1.browser.getCurrentUrl()).toContain("dataHelper._searchWord");
            expect(await basePage._siteHeader.isDisplayed()).toBe(true);
            await protractor_1.browser.navigate().back();
        });
    });
    xdescribe('Quotes block', () => {
        it('Links in Quotes block should work well', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._quotesBlock);
            await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._quotesLnks);
        });
        it('Linked image in Quotes block should work well', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._quotesBlock);
            await homePage.ClickQuotesLinkedImg();
            expect(await protractor_1.browser.getCurrentUrl()).toContain('author/show/');
            expect(await basePage._siteHeader.isDisplayed()).toBe(true);
            await protractor_1.browser.navigate().back();
        });
        it('Quotes feature should work well', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._quotesBlock);
            let firstQuote = await homePage._quotesQuote.getText();
            await protractor_1.browser.sleep(13000);
            let nextQuote = await homePage._quotesQuote.getText();
            expect(await firstQuote).not.toEqual(nextQuote);
        });
    });
    xdescribe('Choice awards block', () => {
        it('Links in Choice awards block should work well', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._awardsBlock);
            await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._awardsLnks);
        });
        it('Linked image in Choice awards block should work well', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._awardsBlock);
            await browserHelper_1.browserHelper.WaitElementClikable(homePage._awardsLnkImg);
            await homePage.ClickBestAwardsLinkedImg();
            expect(await protractor_1.browser.getCurrentUrl()).toContain('choiceawards/');
            expect(await basePage._siteHeader.isDisplayed()).toBe(true);
            await protractor_1.browser.navigate().back();
        });
    });
    xdescribe('Sponsored block', () => {
        it('Links in Sponsored block should work well', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._sponsoredBlock);
            await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._sponsoredLnks);
        });
    });
    xdescribe('Love lists block', () => {
        it('Links in Love lists block should work well', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._loveLsBlock);
            await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._loveLsLnks);
        });
    });
    xdescribe('Publisher block', () => {
        it('Links in Publisher block should work well', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._publisherBlock);
            await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._publisherBtns);
        });
    });
    xdescribe('Ads block', () => {
        it('Ads block should be displayed', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._topAdElement);
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._downAdElement);
            expect(await homePage._topAdElement.isDisplayed()).toBe(true);
            expect(await homePage._downAdElement.isDisplayed()).toBe(true);
        });
    });
    xdescribe('Company block', () => {
        it('Links in Company block should work well', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._companyBlock);
            await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._companyLnks);
        });
    });
    xdescribe('Work with us block', () => {
        it('Links in Work with us block should work well', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._wwuBlock);
            await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._wwuLnks);
        });
    });
    xdescribe('Connect block', () => {
        it('Links in Connect block should work well', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._connectBlock);
            await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._connectBtns);
        });
    });
    xdescribe('Mobile stores block', () => {
        it('Links in Mobile stores block should work well', async () => {
            await browserHelper_1.browserHelper.WaitElementVisible(homePage._msBlock);
            await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._msLnks);
        });
    });
});
//# sourceMappingURL=home.spec.js.map