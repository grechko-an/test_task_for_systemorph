import { browser } from 'protractor';
import { BasePage } from "../pages/basePage.po"
import { HomePage } from '../pages/homePage.po';
import { browserHelper } from "../helpers/browserHelper";
import { SignUp } from "../pages/signUpPage.po";
import { DataHelper } from "../data/dataHelper";
import { ModalPopup } from "../pages/modalPopup.po";
import { GettingStartedPage } from "../pages/gettingStartedPage.po";
import { SignedOutPage } from "../pages/signedOutPage.po"

import chai = require('chai');
import { async } from 'q';

//chai.use(require('chai-smoothie'));
//const expect = chai.expect;

describe('Home Page', () => {

  const basePage = new BasePage();
  const homePage = new HomePage();
  const signUpPage = new SignUp();
  const dataHelper = new DataHelper();
  const modalPopup = new ModalPopup();
  const gettingStartedPage = new GettingStartedPage();
  const signedOutPage = new SignedOutPage();


  describe('Smoke test', () => {

      it('Home page should be opened', async () => {
          await browserHelper.WaitElementVisible(homePage._promoHeader);
          expect(await homePage._promoHeader.isPresent()).toBe(true);
          await browserHelper.WaitElementVisible(homePage._signInForm);
          expect(await homePage._signInForm.isPresent()).toBe(true);
      });

  });

  xdescribe('Sign up and Sign out features', () => {

    it('Should Sign up with correct user data', async () => {
        await browserHelper.WaitElementClikable(homePage._signUpBtn);
        await homePage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        await signUpPage._signUpNameFld.click();
        await signUpPage._signUpNameFld.sendKeys(dataHelper._username);
        await signUpPage._signUpEmailFld.click();
        await signUpPage._signUpEmailFld.sendKeys(dataHelper._invalidEmail);
        await signUpPage._signUpPassFld.click();
        await signUpPage._signUpPassFld.sendKeys(dataHelper._correctPass);
        await signUpPage._captchaCbx.click();
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(gettingStartedPage._gettingStarted);
        await browserHelper.WaitElementClikable(basePage._mainLogo);
        await basePage._mainLogo.click();
        await browserHelper.WaitElementClikable(modalPopup._closeBtn);
        await modalPopup._closeBtn.click();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(false);
    });

    it('Should Sign out well', async () => {
        await homePage._accountImage.click();
        await browserHelper.WaitElementClikable(homePage._signOutBtn);
        await homePage._signOutBtn.click();
        await browserHelper.WaitElementVisible(signedOutPage._signedOutTxt);
        await browserHelper.WaitElementClikable(signedOutPage._goodreadsHomeLnk);
        await signedOutPage._goodreadsHomeLnk.click();
        expect(await homePage._signInForm.isPresent()).toBe(true);
        expect(await homePage._promoHeader.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(true);
    });


    it('Should get consistant alert when try to Sign up with all blank fields', async () => {
        await browserHelper.WaitElementClikable(homePage._signUpBtn);
        await homePage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        await browserHelper.WaitElementClikable(signUpPage._captchaCbx);
        await signUpPage._captchaCbx.click();
        await signUpPage._signUpBtn.click();
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
    });

    it('Should get consistant alert when try to Sign up with blank Email field', async () => {
        await signUpPage._signUpNameFld.click();
        await signUpPage._signUpNameFld.sendKeys(dataHelper._username);
        await signUpPage._captchaCbx.click();
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter an email address to sign up for Goodreads.");
    });

    it('Should get consistant alert when try to Sign up with blank Name field', async () => {
        await signUpPage.clearFlds();
        await signUpPage._signUpEmailFld.click();
        await signUpPage._signUpEmailFld.sendKeys(dataHelper._correctEmail);
        await signUpPage._captchaCbx.click();
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
    });

    it('Should get consistant alert when try to Sign up with blank Password field', async () => {
        await signUpPage._signUpNameFld.click();
        await signUpPage._signUpNameFld.sendKeys(dataHelper._username);
        await signUpPage._captchaCbx.click();
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a password of six or more characters");
    });


    it('Should get consistant alert when try to Sign up without Captcha', async () => {
        await signUpPage._signUpPassFld.click();
        await signUpPage._signUpPassFld.sendKeys(dataHelper._correctPass);
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" CAPTCHA response is incorrect. Please try again.");
    });

    it('Should get consistant alert when try to Sign up with invalid Email', async () => {
        await signUpPage.clearFlds();
        await signUpPage._signUpNameFld.click();
        await signUpPage._signUpNameFld.sendKeys(dataHelper._username);
        await signUpPage._signUpEmailFld.click();
        await signUpPage._signUpEmailFld.sendKeys(dataHelper._invalidEmail);
        await signUpPage._signUpPassFld.click();
        await signUpPage._signUpPassFld.sendKeys(dataHelper._correctPass);
        await signUpPage._captchaCbx.click();
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._signUpEmailFld.getAttribute('validationMessage')).toEqual("Please include an '@' in the email address. 'parker1983gmail.com' is missing an '@'.");
    });

    it('Should get consistant alert when try to Sign up with invalid Password', async () => {
        await signUpPage.clearFlds();
        await signUpPage._signUpNameFld.click();
        await signUpPage._signUpNameFld.sendKeys(dataHelper._username);
        await signUpPage._signUpEmailFld.click();
        await signUpPage._signUpEmailFld.sendKeys(dataHelper._correctEmail);
        await signUpPage._signUpPassFld.click();
        await signUpPage._signUpPassFld.sendKeys(dataHelper._invalidPass);
        await signUpPage._captchaCbx.click();
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a password of six or more characters");
    });

  });


});