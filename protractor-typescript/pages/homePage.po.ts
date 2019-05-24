import { $, ElementFinder, ElementArrayFinder, browser, element, by, $$ } from "protractor";
import { browserHelper } from '../helpers/browserHelper';
import { BasePage } from "../pages/basePage.po";
import { SignedOutPage } from "../pages/signedOutPage.po";
import { SignUp } from "../pages/signUpPage.po";
import { GettingStartedPage } from "../pages/gettingStartedPage.po";
import { SocialNetworks } from "./socialNetworksPages.po";

const basePage = new BasePage();
const signedOutPage = new SignedOutPage();
const signUpPage = new SignUp();
const gettingStartedPage = new GettingStartedPage();
const socialNetworkPages = new SocialNetworks(); 

export class HomePage {
  
  //Base
  public _siteSloganText: ElementFinder;
  public _signInForm: ElementFinder;
  public _promoHeader: ElementFinder;
  public _accountImage: ElementFinder;
  public _homeBtn: ElementFinder;
  public _signOutBtn: ElementFinder;
  public _accountName: ElementFinder;
  //Sign up form
  public _signUpNameFld: ElementFinder;
  public _signUpEmailFld: ElementFinder;
  public _signUpPassFld: ElementFinder;
  public _signUpBtn: ElementFinder;
  //Sign in form
  public _signInEmailFld: ElementFinder;
  public _signInPasswordFld: ElementFinder;
  public _rememberMeCbx: ElementFinder;
  public _signInBtn: ElementFinder;
  //SocialNetwork
  public _fbSignInBtn: ElementFinder;
  public _twitterSignInBtn: ElementFinder;
  public _googleSignInBtn: ElementFinder;
  public _amazonSignInBtn: ElementFinder;




  constructor() {
    this._siteSloganText = element(by.css('div[id="headline"] img'));
    this._signInForm = element(by.id('signInForm'));
    this._promoHeader = element(by.css('div[class="promoHeader__promoMastheadLogoContainer"]'));
    this._signUpBtn = element(by.css('input[value="Sign up"]'));
    this._accountImage = element(by.css('div[class="dropdown dropdown--profileMenu"] a span img'));
    this._signOutBtn = element.all(by.css('div[class*="siteHeader__subNav siteHeader"] li[role="menuitem"]')).last();
    this._signUpNameFld = element(by.id('user_first_name'));
    this._signUpEmailFld = element(by.id('user_email'));
    this._signUpPassFld = element(by.id('user_password_signup'));
    this._homeBtn = element(by.xpath('//nav[@class="siteHeader__primaryNavInline"]//a[text()="Home"]'));
    this._signInEmailFld = element(by.id('userSignInFormEmail'));
    this._signInPasswordFld = element(by.id('user_password'));
    this._rememberMeCbx = element(by.id('remember_me'));
    this._signInBtn = element(by.css('div[class="formBox"] input[type="submit"]'));
    this._fbSignInBtn = element(by.css('img[title="Sign in with your Facebook account"]'));
    this._twitterSignInBtn = element(by.css('img[title="Sign in with your Twitter account"]'));
    this._googleSignInBtn = element(by.css('img[title="Sign in with your Google account"]'));
    this._amazonSignInBtn = element(by.css('img[title="Sign in with your Amazon account"]'));
  };



  public async signUpOnHomepage(name: string, email: string, password: string) : Promise<void> {
    await browserHelper.WaitElementClikable(this._signUpBtn);
    await this._signUpBtn.click();
    await this._signUpNameFld.click();
    await this._signUpNameFld.sendKeys(name);
    await this._signUpEmailFld.click();
    await this._signUpEmailFld.sendKeys(email);
    await this._signUpPassFld.click();
    await this._signUpPassFld.sendKeys(password);
    await this._signUpBtn.click();
    await browserHelper.WaitElementVisible(signUpPage._pageTitle);
    await signUpPage.checkIsNameFieldHaveCorrectUserData(name);
    await signUpPage.checkIsEmailFieldHaveCorrectUserData(email);
    await signUpPage.checkIsPasswordFieldHaveCorrectUserData(password);
    await browserHelper.WaitElementClikable(signUpPage._captchaCbx);
    await signUpPage._captchaCbx.click();
    await browser.sleep(3000);
    await signUpPage._signUpBtn.click();
    await browserHelper.WaitElementVisible(gettingStartedPage._gettingStarted);
    await browserHelper.WaitElementClikable(basePage._mainLogo);
    await basePage._mainLogo.click();
  };

  public async signOut() : Promise<void> {
    await browserHelper.WaitElementClikable(this._signOutBtn);
    await this._signOutBtn.click();
    await browserHelper.WaitElementVisible(signedOutPage._signedOutTxt);
    await browserHelper.WaitElementClikable(signedOutPage._goodreadsHomeLnk);
    await signedOutPage._goodreadsHomeLnk.click();
  };

  public async signInOnHomepage(email: string, password: string) : Promise<void> {
    await browserHelper.WaitElementClikable(this._signInEmailFld);
    await this._signInEmailFld.click();
    await this._signInEmailFld.sendKeys(email);
    await browserHelper.WaitElementClikable(this._signInPasswordFld);
    await this._signInPasswordFld.click();
    await this._signInPasswordFld.sendKeys(password);
    await this._signInBtn.click();
  };

  public async signInWithFB(email: string, password: string) : Promise<void> {
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

  public async signInWithTwitter(email: string, password: string) : Promise<void> {
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

  public async signInWithGoogle(email: string, password: string) : Promise<void> {
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

  public async signInWithAmazon(email: string, password: string) : Promise<void> {
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

  public async getAccountName() : Promise<string> {
    await this._accountImage.click();
    await this._accountName.getAttribute("textContent");
    return;
  };







}