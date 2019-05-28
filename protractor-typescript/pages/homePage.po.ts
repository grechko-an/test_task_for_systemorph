import { $, ElementFinder, ElementArrayFinder, browser, element, by, $$ } from "protractor";
import { browserHelper } from '../helpers/browserHelper';
import { BasePage } from "../pages/basePage.po";
import { SignedOutPage } from "../pages/signedOutPage.po";
import { SignUp } from "../pages/signUpPage.po";
import { GettingStarted } from "../pages/gettingStartedPage.po";
import { SocialNetworks } from "./socialNetworksPages.po";

const basePage = new BasePage();
const signedOutPage = new SignedOutPage();
const signUpPage = new SignUp();
const gettingStartedPage = new GettingStarted();
const socialNetworkPages = new SocialNetworks(); 

export class HomePage {
  
  //Base
  public _homePage: ElementFinder;
  public _siteSloganText: ElementFinder;
  public _accountImage: ElementFinder;
  public _homeBtn: ElementFinder;
  public _signOutBtn: ElementFinder;
  public _accountName: ElementFinder;
  //Sign up form
  public _signUpForm: ElementFinder;
  public _signUpNameFld: ElementFinder;
  public _signUpEmailFld: ElementFinder;
  public _signUpPassFld: ElementFinder;
  public _signUpBtn: ElementFinder;
  //Sign in form
  public _signInForm: ElementFinder;
  public _signInEmailFld: ElementFinder;
  public _signInPasswordFld: ElementFinder;
  public _rememberMeCbx: ElementFinder;
  public _signInBtn: ElementFinder;
  public _forgotItLnk: ElementFinder;
  //SocialNetwork
  public _fbSignInBtn: ElementFinder;
  public _twitterSignInBtn: ElementFinder;
  public _googleSignInBtn: ElementFinder;
  public _amazonSignInBtn: ElementFinder;
  //Promo block
  public _promoHeader: ElementFinder;
  //Best books block
  public _bestBooksBlock: ElementFinder;
  public _bestBooksBtns: ElementArrayFinder;
  public _bestBooksLnks: ElementArrayFinder;
  //Questions text block
  public _qtbFirstQuestion: ElementFinder;
  public _qtbFirstAnswer: ElementFinder;
  public _qtbSecondQuestion: ElementFinder;
  public _qtbSecondAnswer: ElementFinder;
  //Discover block
  public _discoveryBlock: ElementFinder;
  public _discoverySimilarLnks: ElementArrayFinder;
  public _discoveryReflectedLnks: ElementArrayFinder;
  //Search and browse block
  public _searchBlock: ElementFinder;
  public _searchLnks: ElementArrayFinder;
  public _searchFld: ElementFinder;
  public _searchBtn: ElementFinder;
  //Quotes block
  public _quotesBlock: ElementFinder;
  public _quotesLnks: ElementArrayFinder;
  public _quotesQuote: ElementFinder;
  public _quotesLnkImg: ElementFinder;
  //Choise awards block
  public _awardsBlock: ElementFinder;
  public _awardsLnks: ElementArrayFinder;
  public _awardsLnkImg: ElementFinder;
  //Sponsored books block
  public _sponsoredBlock: ElementFinder;
  public _sponsoredLnks: ElementArrayFinder;
  //Love lists block
  public _loveLsBlock: ElementFinder;
  public _loveLsLnks: ElementArrayFinder;
  //Publisher block
  public _publisherBlock: ElementFinder;
  public _publisherBtns: ElementArrayFinder;
  //Ads blocks
  public _topAdElement: ElementFinder;
  public _downAdElement: ElementFinder;
  //Company block
  public _companyBlock: ElementFinder;
  public _companyLnks: ElementArrayFinder;
  //Work with us block
  public _wwuBlock: ElementFinder;
  public _wwuLnks: ElementArrayFinder;
  //Connect block
  public _connectBlock: ElementFinder;
  public _connectBtns: ElementArrayFinder;
  //Mobile stores block
  public _msBlock: ElementFinder;
  public _msLnks: ElementArrayFinder;
  

  constructor() {
    //Base
    this._homePage = element(by.id('signedOutHome'));
    this._siteSloganText = element(by.css('div[id="headline"] img'));
    this._accountImage = element(by.css('div[class="dropdown dropdown--profileMenu"] a span img'));
    this._homeBtn = element(by.xpath('//nav[@class="siteHeader__primaryNavInline"]//a[text()="Home"]'));
    this._signOutBtn = element.all(by.css('div[class*="siteHeader__subNav siteHeader"] li[role="menuitem"]')).last();
    this._accountName = element(by.css('span[class="siteHeader__subNavLink gr-h3 gr-h3--noMargin"]'));
    //Sign up form
    this._signUpForm = element(by.id('newAccountBox'));
    this._signUpNameFld = element(by.id('user_first_name'));
    this._signUpEmailFld = element(by.id('user_email'));
    this._signUpPassFld = element(by.id('user_password_signup'));
    this._signUpBtn = element(by.css('input[value="Sign up"]'));
    //Sign in form
    this._signInForm = element(by.id('signInForm'));
    this._signInEmailFld = element(by.id('userSignInFormEmail'));
    this._signInPasswordFld = element(by.id('user_password'));
    this._rememberMeCbx = element(by.id('remember_me'));
    this._signInBtn = element(by.css('div[class="formBox"] input[type="submit"]'));
    this._forgotItLnk = element(by.id('userForgotPassword'));
    //SocialNetwork
    this._fbSignInBtn = element(by.css('img[title="Sign in with your Facebook account"]'));
    this._twitterSignInBtn = element(by.css('img[title="Sign in with your Twitter account"]'));
    this._googleSignInBtn = element(by.css('img[title="Sign in with your Google account"]'));
    this._amazonSignInBtn = element(by.css('img[title="Sign in with your Amazon account"]'));
    //Promo block
    this._promoHeader = element(by.css('div[class="promoHeader__promoMastheadLogoContainer"]'));
    //Best books block
    this._bestBooksBlock = element(by.css('div[class="promoBox u-textAlignCenter"]'));
    this._bestBooksBtns = element.all(by.css('div[class="buttonContainer"]'));
    this._bestBooksLnks = element.all(by.css('li[class="gr-promoListOfLinks__item"]'));
    //Questions text block
    this._qtbFirstQuestion = element(by.css('div[class="sellingPointBoxLeft"] h2'));
    this._qtbFirstAnswer = element(by.css('div[class="sellingPointBoxLeft"] p'));
    this._qtbSecondQuestion = element(by.css('div[class="sellingPointBoxRight"] h2'));
    this._qtbSecondAnswer = element(by.css('div[class="sellingPointBoxRight"] p'));
    //Discovery block
    this._discoveryBlock = element(by.id('discoveryBox'));
    this._discoverySimilarLnks = element.all(by.css('div[id="discoveryBox"] img[class="bookImgSimilar"]'));
    this._discoveryReflectedLnks = element.all(by.css('div[id="discoveryBox"] img[class="reflected"]'));
    //Search and browse block
    this._searchBlock = element(by.id('browseBox'));
    this._searchLnks = element.all(by.css('div[id="browseBox"] a[class="gr-hyperlink"]'));
    this._searchFld = element(by.id('sitesearch_field'));
    this._searchBtn = element(by.css('a[class="submitLink"] img'));
    //Quotes block
    this._quotesBlock = element(by.css('div[class="featureTeaserBox u-clearBoth"]'));
    this._quotesLnks = element.all(by.css('div[class="featureTeaserBox__quotesBoxLinks"]  a'));
    this._quotesQuote = element(by.id('quotes'));
    this._quotesLnkImg = element(by.css('div[id="quotes"] img'));
    //Choise awards block
    this._awardsBlock = element(by.id('choiceAwardCategories'));
    this._awardsLnks = element.all(by.css('div[id="choiceAwardCategories"] a[class="gr-hyperlink"]'));
    this._awardsLnkImg = element(by.id('choiceLogo'));
    //Sponsored books block
    this._sponsoredBlock = element(by.css('div[class="selfServeAds"]'));
    this._sponsoredLnks = element.all(by.css('div[class="selfServeAds"] a'));
    //Love lists block
    this._loveLsBlock = element(by.id('listsTeaserBox'));
    this._loveLsLnks = element.all(by.css('div[id="listsTeaserBox"] a'));
    //Publisher block
    this._publisherBlock = element(by.id('authorsTeaserBox'));
    this._publisherBtns = element.all(by.css('div[id="authorsTeaserBox"] a'));
    //Ads blocks
    this._topAdElement = element(by.id('canvas'));
    this._downAdElement = element(by.css('body[class="amp-animate amp-mode-touch amp-mode-mouse"] div div'));
    //Company block
    this._companyBlock = element(by.css('div[class="gr-col-md-3 gr-col-lg-4"]'));
    this._companyLnks = element.all(by.css('div[class="gr-col-md-3 gr-col-lg-4"] a'));
    //Work with us block
    this._wwuBlock = element(by.css('div[class="gr-col-md-4 gr-col-lg-4"]'));
    this._wwuLnks = element.all(by.css('div[class="gr-col-md-4 gr-col-lg-4"] a'));
    //Connect block
    this._connectBlock = element(by.css('div[class="gr-col-md-5 gr-col-lg-4"]'));
    this._connectBtns = element.all(by.css('div[class="gr-col-md-5 gr-col-lg-4"] a'));
    //Mobile stores block
    this._msBlock = element(by.css('div[class="responsiveSiteFooter__appLinksColumnContents"]'));
    this._msLnks = element.all(by.css('div[class="responsiveSiteFooter__appLinksColumnContents"] a'));
    };
  

  public async SignUpOnHomePage(name: any, email: any, password: any): Promise<void> {
    await browserHelper.WaitElementClikable(this._signUpForm);
    await this._signUpNameFld.click();
    await this._signUpNameFld.sendKeys(name);
    await this._signUpEmailFld.click();
    await this._signUpEmailFld.sendKeys(email);
    await this._signUpPassFld.click();
    await this._signUpPassFld.sendKeys(password);
    await this._signUpBtn.click();
  };

  public async SignOut() : Promise<void> {
    await browserHelper.WaitElementClikable(this._signOutBtn);
    await this._signOutBtn.click();
    await browserHelper.WaitElementVisible(signedOutPage._signedOutTxt);
    await browserHelper.WaitElementClikable(signedOutPage._goodreadsHomeLnk);
    await signedOutPage._goodreadsHomeLnk.click();
  };

  public async SignInOnHomepage(email: string, password: string) : Promise<void> {
    await browserHelper.WaitElementClikable(this._signInEmailFld);
    await this._signInEmailFld.click();
    await this._signInEmailFld.sendKeys(email);
    await browserHelper.WaitElementClikable(this._signInPasswordFld);
    await this._signInPasswordFld.click();
    await this._signInPasswordFld.sendKeys(password);
    await this.ClickSignInBtn();
  };

  public async SignInWithFB(email: string, password: string) : Promise<void> {
    await browserHelper.WaitElementClikable(this._fbSignInBtn);
    await this._fbSignInBtn.click();
    await browserHelper.WaitElementClikable(socialNetworkPages._fbEmailFld);
    await socialNetworkPages._fbEmailFld.click();
    await socialNetworkPages._fbEmailFld.sendKeys(email);
    await socialNetworkPages._fbPassFld.click();
    await socialNetworkPages._fbPassFld.sendKeys(password);
    await socialNetworkPages._fbLogInBtn.click();
    await browser.sleep(3000);
  };

  public async SignInWithTwitter(email: string, password: string) : Promise<void> {
    await browserHelper.WaitElementClikable(this._twitterSignInBtn);
    await this._twitterSignInBtn.click();
    await browserHelper.WaitElementClikable(socialNetworkPages._twEmailFld);
    await socialNetworkPages._twEmailFld.click();
    await socialNetworkPages._fbEmailFld.sendKeys(email);
    await socialNetworkPages._twPassFld.click();
    await socialNetworkPages._twPassFld.sendKeys(password);
    await socialNetworkPages._twSignInBtn.click();
    await browser.sleep(3000);
  };

  public async SignInWithGoogle(email: string, password: string) : Promise<void> {
    await browserHelper.WaitElementClikable(this._googleSignInBtn);
    await this._googleSignInBtn.click();
    await browserHelper.WaitElementClikable(socialNetworkPages._glEmailFld);
    await socialNetworkPages._glEmailFld.click();
    await socialNetworkPages._glEmailFld.sendKeys(email);
    await socialNetworkPages._glIdNextBtn.click();
    await browserHelper.WaitElementClikable(socialNetworkPages._glPassFld)
    await socialNetworkPages._glPassFld.click();
    await socialNetworkPages._glPassFld.sendKeys(password);
    await socialNetworkPages._glPassNextBtn.click();
    await browser.sleep(3000);
  };

  public async SignInWithAmazon(email: string, password: string) : Promise<void> {
    await browserHelper.WaitElementClikable(this._amazonSignInBtn);
    await this._amazonSignInBtn.click();
    await browserHelper.WaitElementClikable(socialNetworkPages._amEmailFld);
    await socialNetworkPages._amEmailFld.click();
    await socialNetworkPages._amEmailFld.sendKeys(email);
    await socialNetworkPages._amPassFld.click();
    await socialNetworkPages._amPassFld.sendKeys(password);
    await socialNetworkPages._amSignInBtn.click();
    await browser.sleep(3000);
  };

  public async ClickSignInBtn(): Promise<void> {
    await browserHelper.WaitElementClikable(this._signInBtn);
    await this._signInBtn.click();
  }

  public async GetAccountName() : Promise<string> {
    await this._accountImage.click();
    await browserHelper.WaitElementVisible(this._accountName);
    let accname = await this._accountName.getAttribute("innerText");
    return accname;
  };

  public async GoToPromoPage(): Promise<void> {
    await browserHelper.WaitElementClikable(this._promoHeader);
    await this._promoHeader.click();
  };

  public async CheckLinksAndButtonsAreWorkingWell(arrayOfElements): Promise<void> {
    for (var element of arrayOfElements) {
      await browserHelper.WaitElementClikable(element);
      let url = await element.getAttribute('href');
      await element.click();
      expect(await browser.getCurrentUrl()).toEqual(url);
      expect(await basePage._siteHeader.isDisplayed()).toBe(true);
      await basePage.GoToHomePageFromPages();
    }
  };

  public async TextsArePresent(q1: ElementFinder, q2: ElementFinder, a1: ElementFinder, a2: ElementFinder): Promise<void> {
    expect(await q1.isDisplayed()).toBe(true);
    expect(await q2.isDisplayed()).toBe(true);
    expect(await a1.isDisplayed()).toBe(true);
    expect(await a2.isDisplayed()).toBe(true);
  };

  public async ClickSignUpBtnOnHomePage(): Promise<void> {
    await browserHelper.WaitElementClikable(this._signUpBtn);
    await this._signUpBtn.click();
  };

  public async ClickAccountImage(): Promise<void> {
    await browserHelper.WaitElementClikable(this._accountImage)
    await this._accountImage.click();
  };

  public async ClickForgotLnk(): Promise<void> {
    await browserHelper.WaitElementClikable(this._forgotItLnk);
    await this._forgotItLnk.click();
  };

  public async FillSearchFld(word: string): Promise<void> {
    await browserHelper.WaitElementClikable(this._searchFld);
    await this._searchFld.click();
    await this._searchFld.sendKeys(word);
    await this._searchBtn.click();
  };

  public async ClickQuotesLinkedImg(): Promise<void> {
    await browserHelper.WaitElementClikable(this._quotesLnkImg);
    await this._quotesLnkImg.click();
  };
  
  public async ClickBestAwardsLinkedImg(): Promise<void> {
    await browserHelper.WaitElementClikable(this._awardsLnkImg);
    await this._awardsLnkImg.click();
  };
}