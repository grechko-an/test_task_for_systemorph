"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class SignIn {
    constructor() {
        this._pageTitle = protractor_1.element(protractor_1.by.css('div[class="column_right"] h1'));
        this._alertTxt = protractor_1.element(protractor_1.by.css('p[class="flash error"]'));
        this._emailFld = protractor_1.element(protractor_1.by.id('user_email'));
        this._passFld = protractor_1.element(protractor_1.by.id('user_password'));
    }
}
exports.SignIn = SignIn;
//# sourceMappingURL=signInPage.to.js.map