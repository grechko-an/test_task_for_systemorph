import { $, ElementFinder, ElementArrayFinder, browser, element, by, $$ } from "protractor";
import { browserHelper } from '../helpers/browserHelper';



export class ModalPopup {
    
    public _popupTitle: ElementFinder;
    public _closeBtn: ElementFinder;

    constructor() {
        this._popupTitle = element(by.css('div[class="gr-genresForm__title"]'));
        this._closeBtn = element(by.css('div[class="modal__content"] div[class="modal__close"] button'));
    }

    public async CloseHomeModalPopup() : Promise<void> {
        await browserHelper.WaitElementVisible(this._popupTitle);
        await browserHelper.WaitElementClikable(this._closeBtn);
        await this._closeBtn.click();
      };
}