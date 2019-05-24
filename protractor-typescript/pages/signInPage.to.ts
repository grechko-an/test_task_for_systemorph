import { $, ElementFinder, ElementArrayFinder, browser, element, by, $$ } from "protractor";
import { browserHelper } from '../helpers/browserHelper';


export class SignIn {

    public _pageTitle: ElementFinder;
    public _alertTxt: ElementFinder;
    public _emailFld: ElementFinder;
    public _passFld: ElementFinder;

  constructor() {
      this._pageTitle = element(by.css('div[class="column_right"] h1'));
      this._alertTxt = element(by.css('p[class="flash error"]'));
      this._emailFld = element(by.id('user_email'));
      this._passFld = element(by.id('user_password'));
  }

}