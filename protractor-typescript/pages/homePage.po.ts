import { $, ElementFinder, ElementArrayFinder, browser, element, by, $$ } from "protractor";
import { browserHelper } from '../helpers/browserHelper';


export class HomePage {

  public _siteSloganText: ElementFinder;
  public _signInForm: ElementFinder;
  public _promoHeader: ElementFinder;
  public _accountImage: ElementFinder;
  public _signOutBtn: ElementFinder;
  //Sign up form
  public _signUpNameFld: ElementFinder;
  public _signUpEmailFld: ElementFinder;
  public _signUpPassFld: ElementFinder;
  public _signUpBtn: ElementFinder;




  constructor() {
    this._siteSloganText = element(by.css('div[id="headline"] img'));
    this._signInForm = element(by.id('signInForm'));
    this._promoHeader = element(by.css('div[class="promoHeader__promoMastheadLogoContainer"]'));
    this._signUpBtn = element(by.css('input[value="Sign up"]'));
    this._accountImage = element(by.css('div[class="dropdown dropdown--profileMenu"] a span img'));
    this._signOutBtn = element.all(by.css('div[class*="siteHeader__subNav siteHeader"] li[role="menuitem"]')).last();
  };



}