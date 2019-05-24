"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class SignedOutPage {
    constructor() {
        this._signedOutTxt = protractor_1.element(protractor_1.by.id('signed_out'));
        this._goodreadsHomeLnk = protractor_1.element(protractor_1.by.xpath('//a[text()="Goodreads Home"]'));
    }
    ;
}
exports.SignedOutPage = SignedOutPage;
//# sourceMappingURL=signedOutPage.po.js.map