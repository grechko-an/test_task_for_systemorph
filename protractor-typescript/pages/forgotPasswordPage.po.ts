import { $, ElementFinder, ElementArrayFinder, browser, element, by, $$ } from "protractor";
import { browserHelper } from '../helpers/browserHelper';



export class ForgotPassword {
  
 
  public _titleText: ElementFinder;
  public _emailFld: ElementFinder;
  public _resetPassBtn: ElementFinder;
  public _resultMsg: ElementFinder;

  constructor() {
    this._titleText = element(by.css('p[class="intro"]'));
    this._emailFld = element(by.id('user_email'));
    this._resetPassBtn = element(by.css('input[name="next"]'));
    this._resultMsg = element(by.css('p[class="intro"]'));
  };

  public async ResetPass(email: string) : Promise<void> {
    await browserHelper.WaitElementVisible(this._titleText); 
    await browserHelper.WaitElementClikable(this._emailFld);
    await this._emailFld.click();
    await this._emailFld.sendKeys(email);
    await this._resetPassBtn.click();
    await browserHelper.WaitElementVisible(this._resultMsg);
  };

}