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
  public _captchaFrame: ElementFinder;
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
    this._captchaFrame = element(by.css('iframe[role="presentation"]'));
    this._captchaCbx = element(by.id('recaptcha-anchor'));
    this._fields = element.all(by.css('input[name*="user"]'));
    //Alert
    this._alertTxt = element(by.css('p[class="flash error"]'));
  };

  public async SignUpOnSignUpPage(): Promise<void> {
    await browserHelper.WaitElementVisible(this._pageTitle);
    //await this.CheckFieldsHaveTextsFromHomePage(this._fields);
    await this.ClickCaptchaCbx();
    await this._signUpBtn.click();
    await browserHelper.WaitElementVisible(gettingStartedPage._gettingStarted);
    await browserHelper.WaitElementClikable(basePage._mainLogo);
    await basePage._mainLogo.click();
  };

  public async ClickCaptchaCbx(): Promise<void> {
    //await browserHelper.WaitElementVisible(this._captchaFrame);
    await browser.sleep(3000);
    await browser.switchTo().frame(element(by.css('iframe[role="presentation"]')).getWebElement());
    await browserHelper.WaitElementClikable(this._captchaCbx);
    await this._captchaCbx.click();
    await browser.switchTo().defaultContent(); 
    await browser.sleep(3000);
  };

  public async ClickSignUpBtnOnSignUpPage(): Promise<void> {
    await browserHelper.WaitElementClikable(this._signUpBtn);
    await this._signUpBtn.click();
  }

  public async CheckFieldsHaveTextsFromHomePage(arrayOfElements): Promise<void> {
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