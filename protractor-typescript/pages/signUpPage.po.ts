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