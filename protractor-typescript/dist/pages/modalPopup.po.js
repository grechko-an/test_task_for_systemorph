"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browserHelper_1 = require("../helpers/browserHelper");
class ModalPopup {
    constructor() {
        this._popupTitle = protractor_1.element(protractor_1.by.css('div[class="gr-genresForm__title"]'));
        this._closeBtn = protractor_1.element(protractor_1.by.css('div[class="modal__content"] div[class="modal__close"] button'));
    }
    async CloseHomeModalPopup() {
        await browserHelper_1.browserHelper.WaitElementVisible(this._popupTitle);
        await browserHelper_1.browserHelper.WaitElementClikable(this._closeBtn);
        await this._closeBtn.click();
    }
    ;
}
exports.ModalPopup = ModalPopup;
//# sourceMappingURL=modalPopup.po.js.map