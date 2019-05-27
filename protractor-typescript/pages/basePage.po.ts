import { $, ElementFinder, ElementArrayFinder, browser, element, by, $$ } from "protractor";


export class BasePage {

  public _pageBody: ElementFinder;
  public _mainLogo: ElementFinder;
  public _siteHeader: ElementFinder;

  constructor() {
    this._pageBody = element(by.css('body'));
    this._mainLogo = element(by.css('div[id="logo"] a img'));
    this._siteHeader = element(by.css('div[class="siteHeader"]'))
  };

  
  public async IsSignedOut() : Promise<boolean> {

    let id: string = await this._pageBody.getAttribute('id'); 

    if (id == "signedOutHome") {
       return true;
    } else {
       return false;
    };
  };
  
}