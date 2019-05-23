import { $, ElementFinder, ElementArrayFinder, browser, element, by, $$ } from "protractor";
import { browserHelper } from '../helpers/browserHelper';


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

}