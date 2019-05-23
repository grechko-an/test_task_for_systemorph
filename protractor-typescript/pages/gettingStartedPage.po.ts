import { $, ElementFinder, ElementArrayFinder, browser, element, by, $$ } from "protractor";


export class GettingStartedPage {
    
    public _gettingStarted: ElementFinder;
   
    constructor() {
        this._gettingStarted = element(by.css('div[class="headerTitle"]'));
        
    }
}

