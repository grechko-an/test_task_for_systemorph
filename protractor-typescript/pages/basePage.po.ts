import { $, ElementFinder, ElementArrayFinder, browser, element, by, $$ } from "protractor";
import { browserHelper } from '../helpers/browserHelper';


export class BasePage {

  
  public _pageBody: ElementFinder;
  public _mainLogo: ElementFinder;
  public _signPagesMainLogo: ElementFinder;
  public _pagesMainLogo: ElementFinder;
  public _siteHeader: ElementFinder;

  constructor() {
    this._pageBody = element(by.css('body'));
    this._mainLogo = element(by.css('div[id="logo"] a img'));
    this._signPagesMainLogo = element(by.css('div[class="logo"] a img'));
    this._pagesMainLogo = element(by.css('a[title="Goodreads home"]'));
    this._siteHeader = element(by.css('div[class="siteHeader"]'));
  };

  public async goToHomePageFromSignPages(): Promise<void> {
    await browserHelper.WaitElementClikable(this._signPagesMainLogo);
    await this._signPagesMainLogo.click();
  };

  public async goToHomePageFromPages(): Promise<void> {
    await browserHelper.WaitElementClikable(this._pagesMainLogo);
    await this._pagesMainLogo.click();
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