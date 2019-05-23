import { $, ElementFinder, ElementArrayFinder, browser, element, by, $$ } from "protractor";



export class ModalPopup {
    
    public _popupTitle: ElementFinder;
    public _closeBtn: ElementFinder;

    constructor() {
        this._popupTitle = element(by.css('div[class="gr-genresForm__title"]'));
        this._closeBtn = element(by.css('div[class="modal__content"] div[class="modal__close"] button'));
    }
}