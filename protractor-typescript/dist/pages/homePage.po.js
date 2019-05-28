"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browserHelper_1 = require("../helpers/browserHelper");
const basePage_po_1 = require("../pages/basePage.po");
const signedOutPage_po_1 = require("../pages/signedOutPage.po");
const signUpPage_po_1 = require("../pages/signUpPage.po");
const gettingStartedPage_po_1 = require("../pages/gettingStartedPage.po");
const socialNetworksPages_po_1 = require("./socialNetworksPages.po");
const basePage = new basePage_po_1.BasePage();
const signedOutPage = new signedOutPage_po_1.SignedOutPage();
const signUpPage = new signUpPage_po_1.SignUp();
const gettingStartedPage = new gettingStartedPage_po_1.GettingStarted();
const socialNetworkPages = new socialNetworksPages_po_1.SocialNetworks();
class HomePage {
    constructor() {
        //Base
        this._homePage = protractor_1.element(protractor_1.by.id('signedOutHome'));
        this._siteSloganText = protractor_1.element(protractor_1.by.css('div[id="headline"] img'));
        this._accountImage = protractor_1.element(protractor_1.by.css('div[class="dropdown dropdown--profileMenu"] a span img'));
        this._homeBtn = protractor_1.element(protractor_1.by.xpath('//nav[@class="siteHeader__primaryNavInline"]//a[text()="Home"]'));
        this._signOutBtn = protractor_1.element.all(protractor_1.by.css('div[class*="siteHeader__subNav siteHeader"] li[role="menuitem"]')).last();
        this._accountName = protractor_1.element(protractor_1.by.css('span[class="siteHeader__subNavLink gr-h3 gr-h3--noMargin"]'));
        //Sign up form
        this._signUpForm = protractor_1.element(protractor_1.by.id('newAccountBox'));
        this._signUpNameFld = protractor_1.element(protractor_1.by.id('user_first_name'));
        this._signUpEmailFld = protractor_1.element(protractor_1.by.id('user_email'));
        this._signUpPassFld = protractor_1.element(protractor_1.by.id('user_password_signup'));
        this._signUpBtn = protractor_1.element(protractor_1.by.css('input[value="Sign up"]'));
        //Sign in form
        this._signInForm = protractor_1.element(protractor_1.by.id('signInForm'));
        this._signInEmailFld = protractor_1.element(protractor_1.by.id('userSignInFormEmail'));
        this._signInPasswordFld = protractor_1.element(protractor_1.by.id('user_password'));
        this._rememberMeCbx = protractor_1.element(protractor_1.by.id('remember_me'));
        this._signInBtn = protractor_1.element(protractor_1.by.css('div[class="formBox"] input[type="submit"]'));
        this._forgotItLnk = protractor_1.element(protractor_1.by.id('userForgotPassword'));
        //SocialNetwork
        this._fbSignInBtn = protractor_1.element(protractor_1.by.css('img[title="Sign in with your Facebook account"]'));
        this._twitterSignInBtn = protractor_1.element(protractor_1.by.css('img[title="Sign in with your Twitter account"]'));
        this._googleSignInBtn = protractor_1.element(protractor_1.by.css('img[title="Sign in with your Google account"]'));
        this._amazonSignInBtn = protractor_1.element(protractor_1.by.css('img[title="Sign in with your Amazon account"]'));
        //Promo block
        this._promoHeader = protractor_1.element(protractor_1.by.css('div[class="promoHeader__promoMastheadLogoContainer"]'));
        //Best books block
        this._bestBooksBlock = protractor_1.element(protractor_1.by.css('div[class="promoBox u-textAlignCenter"]'));
        this._bestBooksBtns = protractor_1.element.all(protractor_1.by.css('div[class="buttonContainer"]'));
        this._bestBooksLnks = protractor_1.element.all(protractor_1.by.css('li[class="gr-promoListOfLinks__item"]'));
        //Questions text block
        this._qtbFirstQuestion = protractor_1.element(protractor_1.by.css('div[class="sellingPointBoxLeft"] h2'));
        this._qtbFirstAnswer = protractor_1.element(protractor_1.by.css('div[class="sellingPointBoxLeft"] p'));
        this._qtbSecondQuestion = protractor_1.element(protractor_1.by.css('div[class="sellingPointBoxRight"] h2'));
        this._qtbSecondAnswer = protractor_1.element(protractor_1.by.css('div[class="sellingPointBoxRight"] p'));
        //Discovery block
        this._discoveryBlock = protractor_1.element(protractor_1.by.id('discoveryBox'));
        this._discoverySimilarLnks = protractor_1.element.all(protractor_1.by.css('div[id="discoveryBox"] img[class="bookImgSimilar"]'));
        this._discoveryReflectedLnks = protractor_1.element.all(protractor_1.by.css('div[id="discoveryBox"] img[class="reflected"]'));
        //Search and browse block
        this._searchBlock = protractor_1.element(protractor_1.by.id('browseBox'));
        this._searchLnks = protractor_1.element.all(protractor_1.by.css('div[id="browseBox"] a[class="gr-hyperlink"]'));
        this._searchFld = protractor_1.element(protractor_1.by.id('sitesearch_field'));
        this._searchBtn = protractor_1.element(protractor_1.by.css('a[class="submitLink"] img'));
        //Quotes block
        this._quotesBlock = protractor_1.element(protractor_1.by.css('div[class="featureTeaserBox u-clearBoth"]'));
        this._quotesLnks = protractor_1.element.all(protractor_1.by.css('div[class="featureTeaserBox__quotesBoxLinks"]  a'));
        this._quotesQuote = protractor_1.element(protractor_1.by.id('quotes'));
        this._quotesLnkImg = protractor_1.element(protractor_1.by.css('div[id="quotes"] img'));
        //Choise awards block
        this._awardsBlock = protractor_1.element(protractor_1.by.id('choiceAwardCategories'));
        this._awardsLnks = protractor_1.element.all(protractor_1.by.css('div[id="choiceAwardCategories"] a[class="gr-hyperlink"]'));
        this._awardsLnkImg = protractor_1.element(protractor_1.by.id('choiceLogo'));
        //Sponsored books block
        this._sponsoredBlock = protractor_1.element(protractor_1.by.css('div[class="selfServeAds"]'));
        this._sponsoredLnks = protractor_1.element.all(protractor_1.by.css('div[class="selfServeAds"] a'));
        //Love lists block
        this._loveLsBlock = protractor_1.element(protractor_1.by.id('listsTeaserBox'));
        this._loveLsLnks = protractor_1.element.all(protractor_1.by.css('div[id="listsTeaserBox"] a'));
        //Publisher block
        this._publisherBlock = protractor_1.element(protractor_1.by.id('authorsTeaserBox'));
        this._publisherBtns = protractor_1.element.all(protractor_1.by.css('div[id="authorsTeaserBox"] a'));
        //Ads blocks
        this._topAdElement = protractor_1.element(protractor_1.by.id('canvas'));
        this._downAdElement = protractor_1.element(protractor_1.by.css('body[class="amp-animate amp-mode-touch amp-mode-mouse"] div div'));
        //Company block
        this._companyBlock = protractor_1.element(protractor_1.by.css('div[class="gr-col-md-3 gr-col-lg-4"]'));
        this._companyLnks = protractor_1.element.all(protractor_1.by.css('div[class="gr-col-md-3 gr-col-lg-4"] a'));
        //Work with us block
        this._wwuBlock = protractor_1.element(protractor_1.by.css('div[class="gr-col-md-4 gr-col-lg-4"]'));
        this._wwuLnks = protractor_1.element.all(protractor_1.by.css('div[class="gr-col-md-4 gr-col-lg-4"] a'));
        //Connect block
        this._connectBlock = protractor_1.element(protractor_1.by.css('div[class="gr-col-md-5 gr-col-lg-4"]'));
        this._connectBtns = protractor_1.element.all(protractor_1.by.css('div[class="gr-col-md-5 gr-col-lg-4"] a'));
        //Mobile stores block
        this._msBlock = protractor_1.element(protractor_1.by.css('div[class="responsiveSiteFooter__appLinksColumnContents"]'));
        this._msLnks = protractor_1.element.all(protractor_1.by.css('div[class="responsiveSiteFooter__appLinksColumnContents"] a'));
    }
    ;
    async SignUpOnHomePage(name, email, password) {
        await browserHelper_1.browserHelper.WaitElementClikable(this._signUpForm);
        await this._signUpNameFld.click();
        await this._signUpNameFld.sendKeys(name);
        await this._signUpEmailFld.click();
        await this._signUpEmailFld.sendKeys(email);
        await this._signUpPassFld.click();
        await this._signUpPassFld.sendKeys(password);
        await this._signUpBtn.click();
    }
    ;
    async SignOut() {
        await browserHelper_1.browserHelper.WaitElementClikable(this._signOutBtn);
        await this._signOutBtn.click();
        await browserHelper_1.browserHelper.WaitElementVisible(signedOutPage._signedOutTxt);
        await browserHelper_1.browserHelper.WaitElementClikable(signedOutPage._goodreadsHomeLnk);
        await signedOutPage._goodreadsHomeLnk.click();
    }
    ;
    async SignInOnHomepage(email, password) {
        await browserHelper_1.browserHelper.WaitElementClikable(this._signInEmailFld);
        await this._signInEmailFld.click();
        await this._signInEmailFld.sendKeys(email);
        await browserHelper_1.browserHelper.WaitElementClikable(this._signInPasswordFld);
        await this._signInPasswordFld.click();
        await this._signInPasswordFld.sendKeys(password);
        await this.ClickSignInBtn();
    }
    ;
    async SignInWithFB(email, password) {
        await browserHelper_1.browserHelper.WaitElementClikable(this._fbSignInBtn);
        await this._fbSignInBtn.click();
        await browserHelper_1.browserHelper.WaitElementClikable(socialNetworkPages._fbEmailFld);
        await socialNetworkPages._fbEmailFld.click();
        await socialNetworkPages._fbEmailFld.sendKeys(email);
        await socialNetworkPages._fbPassFld.click();
        await socialNetworkPages._fbPassFld.sendKeys(password);
        await socialNetworkPages._fbLogInBtn.click();
        await protractor_1.browser.sleep(3000);
    }
    ;
    async SignInWithTwitter(email, password) {
        await browserHelper_1.browserHelper.WaitElementClikable(this._twitterSignInBtn);
        await this._twitterSignInBtn.click();
        await browserHelper_1.browserHelper.WaitElementClikable(socialNetworkPages._twEmailFld);
        await socialNetworkPages._twEmailFld.click();
        await socialNetworkPages._fbEmailFld.sendKeys(email);
        await socialNetworkPages._twPassFld.click();
        await socialNetworkPages._twPassFld.sendKeys(password);
        await socialNetworkPages._twSignInBtn.click();
        await protractor_1.browser.sleep(3000);
    }
    ;
    async SignInWithGoogle(email, password) {
        await browserHelper_1.browserHelper.WaitElementClikable(this._googleSignInBtn);
        await this._googleSignInBtn.click();
        await browserHelper_1.browserHelper.WaitElementClikable(socialNetworkPages._glEmailFld);
        await socialNetworkPages._glEmailFld.click();
        await socialNetworkPages._glEmailFld.sendKeys(email);
        await socialNetworkPages._glIdNextBtn.click();
        await browserHelper_1.browserHelper.WaitElementClikable(socialNetworkPages._glPassFld);
        await socialNetworkPages._glPassFld.click();
        await socialNetworkPages._glPassFld.sendKeys(password);
        await socialNetworkPages._glPassNextBtn.click();
        await protractor_1.browser.sleep(3000);
    }
    ;
    async SignInWithAmazon(email, password) {
        await browserHelper_1.browserHelper.WaitElementClikable(this._amazonSignInBtn);
        await this._amazonSignInBtn.click();
        await browserHelper_1.browserHelper.WaitElementClikable(socialNetworkPages._amEmailFld);
        await socialNetworkPages._amEmailFld.click();
        await socialNetworkPages._amEmailFld.sendKeys(email);
        await socialNetworkPages._amPassFld.click();
        await socialNetworkPages._amPassFld.sendKeys(password);
        await socialNetworkPages._amSignInBtn.click();
        await protractor_1.browser.sleep(3000);
    }
    ;
    async ClickSignInBtn() {
        await browserHelper_1.browserHelper.WaitElementClikable(this._signInBtn);
        await this._signInBtn.click();
    }
    async GetAccountName() {
        await this._accountImage.click();
        await browserHelper_1.browserHelper.WaitElementVisible(this._accountName);
        let accname = await this._accountName.getAttribute("innerText");
        return accname;
    }
    ;
    async GoToPromoPage() {
        await browserHelper_1.browserHelper.WaitElementClikable(this._promoHeader);
        await this._promoHeader.click();
    }
    ;
    async CheckLinksAndButtonsAreWorkingWell(arrayOfElements) {
        for (var element of arrayOfElements) {
            await browserHelper_1.browserHelper.WaitElementClikable(element);
            let url = await element.getAttribute('href');
            await element.click();
            expect(await protractor_1.browser.getCurrentUrl()).toEqual(url);
            expect(await basePage._siteHeader.isDisplayed()).toBe(true);
            await basePage.GoToHomePageFromPages();
        }
    }
    ;
    async TextsArePresent(q1, q2, a1, a2) {
        expect(await q1.isDisplayed()).toBe(true);
        expect(await q2.isDisplayed()).toBe(true);
        expect(await a1.isDisplayed()).toBe(true);
        expect(await a2.isDisplayed()).toBe(true);
    }
    ;
    async ClickSignUpBtnOnHomePage() {
        await browserHelper_1.browserHelper.WaitElementClikable(this._signUpBtn);
        await this._signUpBtn.click();
    }
    ;
    async ClickAccountImage() {
        await browserHelper_1.browserHelper.WaitElementClikable(this._accountImage);
        await this._accountImage.click();
    }
    ;
    async ClickForgotLnk() {
        await browserHelper_1.browserHelper.WaitElementClikable(this._forgotItLnk);
        await this._forgotItLnk.click();
    }
    ;
    async FillSearchFld(word) {
        await browserHelper_1.browserHelper.WaitElementClikable(this._searchFld);
        await this._searchFld.click();
        await this._searchFld.sendKeys(word);
        await this._searchBtn.click();
    }
    ;
    async ClickQuotesLinkedImg() {
        await browserHelper_1.browserHelper.WaitElementClikable(this._quotesLnkImg);
        await this._quotesLnkImg.click();
    }
    ;
    async ClickBestAwardsLinkedImg() {
        await browserHelper_1.browserHelper.WaitElementClikable(this._awardsLnkImg);
        await this._awardsLnkImg.click();
    }
    ;
}
exports.HomePage = HomePage;
//# sourceMappingURL=homePage.po.js.map