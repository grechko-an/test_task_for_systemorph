"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class HomePage {
    constructor() {
        this.mainLogo = protractor_1.element(protractor_1.by.css('div[id="logo"] a img'));
        this.siteSloganText = protractor_1.element(protractor_1.by.css('div[id="headline"] img'));
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=homePage.po.js.map