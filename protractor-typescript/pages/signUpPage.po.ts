import { $, ElementFinder, ElementArrayFinder, browser, element, by, $$ } from "protractor";
import { browserHelper } from '../helpers/browserHelper';
import { BasePage } from "../pages/basePage.po";
import { GettingStarted } from "../pages/gettingStartedPage.po"


const basePage = new BasePage();
const gettingStartedPage = new GettingStarted();


export class SignUp {

  //Texts
  public _pageTitle: ElementFinder;
  public _signUpWithEmail: ElementFinder;
  //Sign up form
  public _signUpNameFld: ElementFinder;
  public _signUpEmailFld: ElementFinder;
  public _signUpPassFld: ElementFinder;
  public _signUpBtn: ElementFinder;
  public _captchaCbx: ElementFinder;
  //Alert
  public _alertTxt: ElementFinder;

  constructor() {
    this._pageTitle = element(by.css('div[class="column_right"] h1'));
    this._signUpWithEmail = element(by.css('div[class="signup"]'));
    this._signUpNameFld = element(by.id('user_first_name'));
    this._signUpEmailFld = element(by.id('user_email'));
    this._signUpPassFld = element(by.id('user_password'));
    this._signUpBtn = element(by.css('input[value="Sign up"]'));
    this._captchaCbx = element(by.id('recaptcha-anchor'));
    this._alertTxt = element(by.css('p[class="flash notice"]'));
  }

  public async clearFlds(): Promise<void> {
      await this._signUpNameFld.clear();
      await this._signUpEmailFld.clear();
      await this._signUpPassFld.clear();
  }

  public async signUpOnSignUpPage(name: string, email: string, password: string): Promise<void> {
    await browserHelper.WaitElementVisible(this._pageTitle);
    await this._signUpNameFld.click();
    await this._signUpNameFld.sendKeys(name);
    await this._signUpEmailFld.click();
    await this._signUpEmailFld.sendKeys(email);
    await this._signUpPassFld.click();
    await this._signUpPassFld.sendKeys(password);
    await browserHelper.WaitElementClikable(this._captchaCbx);
    await this._captchaCbx.click();
    await browser.sleep(3000);
    await this._signUpBtn.click();
    await browserHelper.WaitElementVisible(gettingStartedPage._gettingStarted);
    await browserHelper.WaitElementClikable(basePage._mainLogo);
    await basePage._mainLogo.click();
  }

  public async typeNameOnSignUpPage(name: string): Promise<void> {
    await this._signUpNameFld.click();
    await this._signUpNameFld.sendKeys(name);
    await browserHelper.WaitElementClikable(this._captchaCbx);
    await this._captchaCbx.click();
    await browser.sleep(3000);
  }

  public async typeEmailOnSignUpPage(email: string): Promise<void> {
    await this._signUpEmailFld.click();
    await this._signUpEmailFld.sendKeys(email);
    await browserHelper.WaitElementClikable(this._captchaCbx);
    await this._captchaCbx.click();
    await browser.sleep(3000);
  }

  public async typePasswordOnSignUpPage(password: string): Promise<void> {
    await this._signUpPassFld.click();
    await this._signUpPassFld.sendKeys(password);
    await browserHelper.WaitElementClikable(this._captchaCbx);
    await this._captchaCbx.click();
    await browser.sleep(3000);
  }

  public async checkIsNameFieldHaveCorrectUserData(): Promise<void> {
    try {
      if (await this._signUpNameFld.getAttribute('value') == null) {
        throw new Error();
      }
    }
    catch(e) {
      console.log('Name field in Sign Up page is empty');
    }
  }

  public async checkIsEmailFieldHaveCorrectUserData(): Promise<void> {
    try {
      if (await this._signUpEmailFld.getAttribute('value') == null) {
        throw new Error();
      }
    }
    catch(e) {
      console.log('Email field in Sign Up page is empty');
    }
  }

  public async checkIsPasswordFieldHaveCorrectUserData(): Promise<void> {
    try {
      if (await this._signUpPassFld.getAttribute('value') == null) {
        throw new Error();
      }
    }
    catch(e) {
      console.log('Password field in Sign Up page is empty');
    }
  }
}