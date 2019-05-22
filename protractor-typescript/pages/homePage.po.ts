import { $, ElementFinder, ElementArrayFinder, browser, element, by, $$ } from "protractor";
import { browserHelper } from '../helpers/browserHelper';


export class HomePage {

  public mainLogo: ElementFinder;
  public siteSloganText: ElementFinder;

  constructor() {
    this.mainLogo = element(by.css('div[id="logo"] a img'));
    this.siteSloganText = element(by.css('div[id="headline"] img'));

}

}