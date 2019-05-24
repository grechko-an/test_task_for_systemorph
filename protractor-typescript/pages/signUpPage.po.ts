import { $, ElementFinder, ElementArrayFinder, browser, element, by, $$ } from "protractor";
import { browserHelper } from '../helpers/browserHelper';
import { BasePage } from "../pages/basePage.po";
import { GettingStartedPage } from "../pages/gettingStartedPage.po"


const basePage = new BasePage();
const gettingStartedPage = new GettingStartedPage();


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


  public async checkIsNameFieldHaveCorrectUserData(name: string): Promise<void> {
    try {
      expect(this._signUpNameFld.getAttribute('value')).toEqual(name);
    }
    catch(e) {
      console.log('Name field in Sign Up page does not match with Name typed on Home page', e);
    }
  }

  public async checkIsEmailFieldHaveCorrectUserData(email: string): Promise<void> {
    try {
      expect(this._signUpEmailFld.getAttribute('value')).toEqual(email);
    }
    catch(e) {
      console.log('Email in Sign Up page does not match with Email typed on Home page', e);
    }
  }

  public async checkIsPasswordFieldHaveCorrectUserData(password: string): Promise<void> {
    try {
      expect(this._signUpPassFld.getAttribute('value')).toEqual(password);
    }
    catch(e) {
      console.log('Password in Sign Up page does not match with Password typed on Home page', e);
    }
  }
}