import { browser } from 'protractor';
import { BasePage } from "../pages/basePage.po"
import { HomePage } from '../pages/homePage.po';
import { browserHelper } from "../helpers/browserHelper";
import { SignUp } from "../pages/signUpPage.po";
import { SignIn } from "../pages/signInPage.to"
import { DataHelper } from "../data/dataHelper";
import { ModalPopup } from "../pages/modalPopup.po";
import { ForgotPassword } from "../pages/forgotPasswordPage.po"


describe('Home Page', () => {

  const basePage = new BasePage();
  const homePage = new HomePage();
  const signUpPage = new SignUp();
  const signInPage = new SignIn();
  const dataHelper = new DataHelper();
  const modalPopup = new ModalPopup();
  const forgotPasswordPage = new ForgotPassword();


  describe('Smoke test', () => {

      it('Home page should be opened', async () => {
          await browserHelper.WaitElementVisible(homePage._promoHeader);
          expect(await homePage._promoHeader.isPresent()).toBe(true);
          await browserHelper.WaitElementVisible(homePage._signInForm);
          expect(await homePage._signInForm.isPresent()).toBe(true);
      });

  });

  xdescribe('Sign up and Sign out features', () => {

    it('Should Sign up via Home page with correct user data', async () => {
        await homePage.signUpOnHomepage(dataHelper._username, dataHelper._correctEmail, dataHelper._correctPass);
        await modalPopup.closeHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await homePage.getAccountName()).toEqual(dataHelper._username);
        expect(await basePage.isSignedOut()).toBe(false);
    });

    it('Should Sign out well', async () => {
        await homePage.signOut();
        await browserHelper.WaitElementVisible(homePage._signInForm);
        expect(await homePage._signInForm.isPresent()).toBe(true);
        expect(await homePage._promoHeader.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(true);
    });


    it('Should get consistant alert when try to Sign up with blank fields', async () => {
        await browserHelper.WaitElementClikable(homePage._signUpBtn);
        await homePage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        await browserHelper.WaitElementClikable(signUpPage._captchaCbx);
        await signUpPage._captchaCbx.click();
        await browser.sleep(3000);
        await signUpPage._signUpBtn.click();
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
    });

    it('Should get consistant alert when try to Sign up with blank Name field', async () => {
        await signUpPage.clearFlds();
        await signUpPage.typeEmailOnSignUpPage(dataHelper._correctEmail);
        await signUpPage.typePasswordOnSignUpPage(dataHelper._correctPass);
        await this._captchaCbx.click();
        await browser.sleep(3000);
        await this._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
    });

    it('Should get consistant alert when try to Sign up with blank Email field', async () => {
        await signUpPage.clearFlds();
        await signUpPage.typeNameOnSignUpPage(dataHelper._username);
        await signUpPage.typePasswordOnSignUpPage(dataHelper._correctPass);
        await this._captchaCbx.click();
        await browser.sleep(3000);
        await this._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter an email address to sign up for Goodreads.");
    });

    it('Should get consistant alert when try to Sign up with blank Password field', async () => {
        await signUpPage.clearFlds();
        await signUpPage.typeNameOnSignUpPage(dataHelper._username);
        await signUpPage.typeEmailOnSignUpPage(dataHelper._correctEmail);
        await this._captchaCbx.click();
        await browser.sleep(3000);
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a password of six or more characters");
    });

    it('Should get consistant alert when try to Sign up without Captcha', async () => {
        await signUpPage.clearFlds();
        await signUpPage.typeNameOnSignUpPage(dataHelper._username);
        await signUpPage.typeEmailOnSignUpPage(dataHelper._correctEmail);
        await signUpPage.typePasswordOnSignUpPage(dataHelper._correctPass);
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" CAPTCHA response is incorrect. Please try again.");
    });

    it('Should get consistant alert when try to Sign up with invalid Email', async () => {
        await signUpPage.clearFlds();
        await signUpPage.typeNameOnSignUpPage(dataHelper._username);
        await signUpPage.typeEmailOnSignUpPage(dataHelper._invalidEmail);
        await signUpPage.typePasswordOnSignUpPage(dataHelper._correctPass);
        await this._captchaCbx.click();
        await browser.sleep(3000);
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._signUpEmailFld.getAttribute('validationMessage')).toEqual("Please include an '@' in the email address. 'parker1983gmail.com' is missing an '@'.");
    });

    it('Should get consistant alert when try to Sign up with invalid Password', async () => {
        await signUpPage.clearFlds();
        await signUpPage.typeNameOnSignUpPage(dataHelper._username);
        await signUpPage.typeEmailOnSignUpPage(dataHelper._invalidEmail);
        await signUpPage.typePasswordOnSignUpPage(dataHelper._invalidPass);
        await signUpPage._captchaCbx.click();
        await browser.sleep(3000);
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a password of six or more characters");
    });

  });


  xdescribe('Sign in feature', () => {

    it('Should Sign in via Home page with correct user data', async () => {
        await browser.navigate().back();
        await homePage.signInOnHomepage(dataHelper._correctEmail, dataHelper._correctPass);
        await modalPopup.closeHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(false);
        expect(await homePage.getAccountName()).toEqual(dataHelper._username);
    });

    it('Should get consistant alert when try to Sign in with all blank fields', async () => {
        await homePage.signOut();
        await homePage.signInOnHomepage(null, null);
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
    });

    it('Should get consistant alert when try to Sign in with blank Email field', async () => {
        await browser.navigate().back();
        await homePage.signInOnHomepage(null, dataHelper._correctPass);
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
    });


    it('Should get consistant alert when try to Sign in with blank Password field', async () => {
        await browser.navigate().back();
        await homePage.signInOnHomepage(dataHelper._correctEmail, null);
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
    });


    it('Should get consistant alert when try to Sign up with incorrect Email', async () => {
        await browser.navigate().back();
        await homePage.signInOnHomepage(dataHelper._incorrectEmail, dataHelper._correctPass);
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');

    });

    it('Should get consistant alert when try to Sign up with incorrect Password', async () => {
        await browser.navigate().back();
        await homePage.signInOnHomepage(dataHelper._correctEmail, dataHelper._incorrectPass);
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');

    });

    it('Should get consistant alert when try to Sign up with invalid Email', async () => {
        await browser.navigate().back();
        await homePage.signInOnHomepage(dataHelper._invalidEmail, dataHelper._correctPass);
        expect (await basePage._mainLogo.isPresent()).toBe(true);
        expect(await homePage._signInEmailFld.getAttribute('validationMessage')).toEqual("Please include an '@' in the email address. 'parker1983gmail.com' is missing an '@'.");

    });

    it('Should get consistant alert when try to Sign up with invalid Password', async () => {
        await browser.navigate().back();
        await homePage.signInOnHomepage(dataHelper._correctEmail, dataHelper._invalidPass);
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
    });

    it('Should be signed in when Remember me feature is on', async () => {
        await browser.navigate().back();
        if (! await homePage._rememberMeCbx.isSelected()) {
            await homePage._rememberMeCbx.click();
        }
        await homePage.signInOnHomepage(dataHelper._correctEmail, dataHelper._correctPass);
        await modalPopup.closeHomeModalPopup();
        await browserHelper.WaitElementVisible(homePage._accountImage);
        await browser.refresh();
        await modalPopup.closeHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(false);
        expect(await homePage.getAccountName()).toEqual(dataHelper._username);
    });

    it('Should be able to reset Password via Forgot feature', async () => {
        await browserHelper.WaitElementClikable(this._accountImage);
        await this._accountImage.click();
        await homePage.signOut();
        await browserHelper.WaitElementClikable(homePage._forgotItLnk);
        await homePage._forgotItLnk.click();
        await forgotPasswordPage.resetPass(dataHelper._correctEmail);
        expect(await forgotPasswordPage._resultMsg).toContain(" We'll send instructions to this email");
    });

    xit('Should Sign in via Facebook', async () => {
        await browser.navigate().back();
        await homePage.signInWithFB(dataHelper._socialNetworksLogin, dataHelper._socialNetworksPass);
        await modalPopup.closeHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(false);
    });

    xit('Should Sign in via Twitter', async () => {
        await browserHelper.WaitElementClikable(this._accountImage);
        await this._accountImage.click();
        await homePage.signOut();
        await homePage.signInWithTwitter(dataHelper._socialNetworksLogin, dataHelper._socialNetworksPass);
        await modalPopup.closeHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(false);
    });

    xit('Should Sign in via Google', async () => {
        await browserHelper.WaitElementClikable(this._accountImage);
        await this._accountImage.click();
        await homePage.signOut();
        await homePage.signInWithGoogle(dataHelper._socialNetworksLogin, dataHelper._socialNetworksPass);
        await modalPopup.closeHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(false);
    });

    xit('Should Sign in via Amazon', async () => {
        await browserHelper.WaitElementClikable(this._accountImage);
        await this._accountImage.click();
        await homePage.signOut();
        await homePage.signInWithAmazon(dataHelper._socialNetworksLogin, dataHelper._socialNetworksPass);
        await modalPopup.closeHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(false);
    });

});

  xdescribe('Best books for summer block', () => {

    it('Should Sign in via Home page with correct user data', async () => {
        await browser.navigate().back();
        await homePage.signInOnHomepage(dataHelper._correctEmail, dataHelper._correctPass);
        await modalPopup.closeHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(false);
        expect(await homePage.getAccountName()).toEqual(dataHelper._username);
    });


    it('Should get consistant alert when try to Sign in with all blank fields', async () => {
        await homePage.signOut();
        await homePage.signInOnHomepage(null, null);
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
    });






  });



});