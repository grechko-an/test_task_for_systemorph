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
  public _fields: ElementArrayFinder;
  //Alert
  public _alertTxt: ElementFinder;

  constructor() {
    //Texts
    this._pageTitle = element(by.css('div[class="column_right"] h1'));
    this._signUpWithEmail = element(by.css('div[class="signup"]'));
    //Sign up form
    this._signUpNameFld = element(by.id('user_first_name'));
    this._signUpEmailFld = element(by.id('user_email'));
    this._signUpPassFld = element(by.id('user_password'));
    this._signUpBtn = element(by.css('input[value="Sign up"]'));
    this._captchaCbx = element(by.id('recaptcha-anchor'));
    this._fields = element.all(by.css('input[name*="user"]'));
    //Alert
    this._alertTxt = element(by.css('p[class="flash notice"]'));
  };

  public async clearFlds(): Promise<void> {
      await this._signUpNameFld.clear();
      await this._signUpEmailFld.clear();
      await this._signUpPassFld.clear();
  };

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
  };

  public async typeNameOnSignUpPage(name: string): Promise<void> {
    await this._signUpNameFld.click();
    await this._signUpNameFld.sendKeys(name);
    await browserHelper.WaitElementClikable(this._captchaCbx);
    await this._captchaCbx.click();
    await browser.sleep(3000);
  };

  public async typeEmailOnSignUpPage(email: string): Promise<void> {
    await this._signUpEmailFld.click();
    await this._signUpEmailFld.sendKeys(email);
    await browserHelper.WaitElementClikable(this._captchaCbx);
    await this._captchaCbx.click();
    await browser.sleep(3000);
  };

  public async typePasswordOnSignUpPage(password: string): Promise<void> {
    await this._signUpPassFld.click();
    await this._signUpPassFld.sendKeys(password);
    await browserHelper.WaitElementClikable(this._captchaCbx);
    await this._captchaCbx.click();
    await browser.sleep(3000);
  };

  public async clickCaptchaCbx(): Promise<void> {
    await browserHelper.WaitElementClikable(this._captchaCbx);
    await this._captchaCbx.click();
    await browser.sleep(3000);
  };

  public async checkFieldsHaveTextsFromHomePage(arrayOfElements): Promise<void> {
    for (var element of arrayOfElements) {
      try {
        if (element.getAttribute('value') == null) {
          throw new Error();
        }
      }
      catch(e) {
        console.log('One or more Field in Sign Up page is empty');
      }
    } 
  }
}