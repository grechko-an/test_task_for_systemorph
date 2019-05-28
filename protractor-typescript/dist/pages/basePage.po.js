"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browserHelper_1 = require("../helpers/browserHelper");
class BasePage {
    constructor() {
        this._pageBody = protractor_1.element(protractor_1.by.css('body'));
        this._mainLogo = protractor_1.element(protractor_1.by.css('div[id="logo"] a img'));
        this._signPagesMainLogo = protractor_1.element(protractor_1.by.css('div[class="logo"] a img'));
        this._pagesMainLogo = protractor_1.element(protractor_1.by.css('a[title="Goodreads home"]'));
        this._siteHeader = protractor_1.element(protractor_1.by.css('div[class="siteHeader"]'));
    }
    ;
    async MainLogoClick() {
        await browserHelper_1.browserHelper.WaitElementClikable(this._signPagesMainLogo);
        await this._signPagesMainLogo.click();
    }
    ;
    async GoToHomePageFromSignPages() {
        await browserHelper_1.browserHelper.WaitElementClikable(this._signPagesMainLogo);
        await this._signPagesMainLogo.click();
    }
    ;
    async GoToHomePageFromPages() {
        await browserHelper_1.browserHelper.WaitElementClikable(this._pagesMainLogo);
        await this._pagesMainLogo.click();
    }
    ;
    async IsSignedOut() {
        let id = await this._pageBody.getAttribute('id');
        if (id == "signedOutHome") {
            return true;
        }
        else {
            return false;
        }
        ;
    }
    ;
}
exports.BasePage = BasePage;
//# sourceMappingURL=basePage.po.js.map