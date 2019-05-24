import { $, ElementFinder, ElementArrayFinder, browser, element, by, $$ } from "protractor";


export class BasePage {

  public _pageBody: ElementFinder;
  public _mainLogo: ElementFinder;

  constructor() {
    this._pageBody = element(by.css('body'));
    this._mainLogo = element(by.css('div[id="logo"] a img'));
  };

  
  public async isSignedOut() : Promise<boolean> {

    let id: string = await this._pageBody.getAttribute('id'); 

    if (id == "signedOutHome") {
       return true;
    } else {
       return false;
    };
  };
  
}