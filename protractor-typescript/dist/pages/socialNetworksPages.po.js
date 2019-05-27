"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class SocialNetworks {
    constructor() {
        this._fbEmailFld = protractor_1.element(protractor_1.by.id('email'));
        this._fbPassFld = protractor_1.element(protractor_1.by.id('pass'));
        this._fbLogInBtn = protractor_1.element(protractor_1.by.id('loginbutton'));
        this._twEmailFld = protractor_1.element(protractor_1.by.id('username_or_email'));
        this._twPassFld = protractor_1.element(protractor_1.by.id('password'));
        this._twSignInBtn = protractor_1.element(protractor_1.by.id('allow'));
        this._glEmailFld = protractor_1.element(protractor_1.by.id('identifierId'));
        this._glIdNextBtn = protractor_1.element(protractor_1.by.id('identifierNext'));
        this._glPassFld = protractor_1.element(protractor_1.by.id('password'));
        this._glPassNextBtn = protractor_1.element(protractor_1.by.id('passwordNext'));
        this._amEmailFld = protractor_1.element(protractor_1.by.id('ap_email'));
        this._amPassFld = protractor_1.element(protractor_1.by.id('ap_password'));
        this._amSignInBtn = protractor_1.element(protractor_1.by.id('signInSubmit'));
    }
}
exports.SocialNetworks = SocialNetworks;
//# sourceMappingURL=socialNetworksPages.po.js.map