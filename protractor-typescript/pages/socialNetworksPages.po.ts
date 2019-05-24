import { $, ElementFinder, ElementArrayFinder, browser, element, by, $$ } from "protractor";
import { browserHelper } from '../helpers/browserHelper';



export class SocialNetworks {

    //Facebook
    public _fbEmailFld: ElementFinder;
    public _fbPassFld: ElementFinder;
    public _fbLogInBtn: ElementFinder;
    public _fbContinueAsBtn: ElementFinder;
    //Twitter
    public _twEmailFld: ElementFinder;
    public _twPassFld: ElementFinder;
    public _twSignInBtn: ElementFinder;
    //Google
    public _glEmailFld: ElementFinder;
    public _glIdNextBtn: ElementFinder;
    public _glPassFld: ElementFinder;
    public _glPassNextBtn: ElementFinder;
    //Amazon
    public _amEmailFld: ElementFinder;
    public _amPassFld: ElementFinder;
    public _amSignInBtn: ElementFinder;


  constructor() {
      this._fbEmailFld = element(by.id('email'));
      this._fbPassFld = element(by.id('pass'));
      this._fbLogInBtn = element(by.id('loginbutton'));
      this._twEmailFld = element(by.id('username_or_email'));
      this._twPassFld = element(by.id('password'));
      this._twSignInBtn = element(by.id('allow'));
      this._glEmailFld = element(by.id('identifierId'));
      this._glIdNextBtn = element(by.id('identifierNext'));
      this._glPassFld = element(by.id('password'));
      this._glPassNextBtn = element(by.id('passwordNext'));
      this._amEmailFld = element(by.id('ap_email'));
      this._amPassFld = element(by.id('ap_password'));
      this._amSignInBtn = element(by.id('signInSubmit'));
  }

}