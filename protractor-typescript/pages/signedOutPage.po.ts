import { $, ElementFinder, ElementArrayFinder, browser, element, by, $$ } from "protractor";


export class SignedOutPage {

  public _signedOutTxt: ElementFinder;
  public _goodreadsHomeLnk: ElementFinder;
 
  constructor() {
    this._signedOutTxt = element(by.id('signed_out'));
    this._goodreadsHomeLnk = element(by.xpath('//a[text()="Goodreads Home"]'));
  };

}