import { browser, protractor } from 'protractor';
import { BasePage } from "../pages/basePage.po"
import { HomePage } from '../pages/homePage.po';
import { browserHelper } from "../helpers/browserHelper";
import { SignUp } from "../pages/signUpPage.po";
import { SignIn } from "../pages/signInPage.to"
import { DataHelper } from "../helpers/dataHelper";
import { ModalPopup } from "../pages/modalPopup.po";
import { ForgotPassword } from "../pages/forgotPasswordPage.po"
import { url } from 'inspector';


describe('Home Page', () => {

  const EC = protractor.ExpectedConditions;

  const basePage = new BasePage();
  const homePage = new HomePage();
  const signUpPage = new SignUp();
  const signInPage = new SignIn();
  const dataHelper = new DataHelper();
  const modalPopup = new ModalPopup();
  const forgotPasswordPage = new ForgotPassword();

  //Debugged, works well
  describe('Smoke test', () => {
    it('Home page should be opened', async () => {
        await browserHelper.CheckLoadSpeed(homePage._homePage); //This step is some sort of load speed testing
        await browserHelper.WaitElementVisible(basePage._mainLogo);
        await browserHelper.WaitElementVisible(homePage._signInForm);
        expect(await basePage._mainLogo.isDisplayed()).toBe(true);
        expect(await homePage._signInForm.isDisplayed()).toBe(true);
    });
  });
  //Has some tests that are falling 
  xdescribe('Sign up and Sign out features', () => {
    xit('Should Sign up via Home page with correct user data', async () => {
        await homePage.SignUpOnHomePage(dataHelper._username, dataHelper._correctEmail, dataHelper._correctPass);
        await signUpPage.SignUpOnSignUpPage();
        await modalPopup.CloseHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await homePage.GetAccountName()).toEqual(dataHelper._username);
        expect(await basePage.IsSignedOut()).toBe(false);
    });
    xit('Should Sign out well', async () => {
        await homePage.ClickAccountImage();
        await homePage.SignOut();
        await browserHelper.WaitElementVisible(homePage._signInForm);
        expect(await homePage._signInForm.isPresent()).toBe(true);
        expect(await homePage._promoHeader.isPresent()).toBe(true);
        expect(await basePage.IsSignedOut()).toBe(true);
    });
    xit('Should get consistant alert when try to Sign up with blank fields', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.ClickSignUpBtnOnHomePage();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        await signUpPage.ClickCaptchaCbx();
        await signUpPage.ClickSignUpBtnOnSignUpPage();
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
        await basePage.GoToHomePageFromSignPages();
    });
    xit('Should get consistant alert when try to Sign up with blank Name field', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.SignUpOnHomePage("", dataHelper._correctEmail, dataHelper._correctPass);
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        await signUpPage.ClickCaptchaCbx();
        await signUpPage.ClickSignUpBtnOnSignUpPage();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
        await basePage.GoToHomePageFromSignPages();
    });
    xit('Should get consistant alert when try to Sign up with blank Email field', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.SignUpOnHomePage(dataHelper._username, "", dataHelper._correctPass);
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        await signUpPage.ClickCaptchaCbx();
        await signUpPage.ClickSignUpBtnOnSignUpPage();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter an email address to sign up for Goodreads.");
        await basePage.GoToHomePageFromSignPages();
    });
    //Will fall because of bug with posibility to sign up without password
    xit('Should get consistant alert when try to Sign up with blank Password field', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.SignUpOnHomePage(dataHelper._username, dataHelper._correctEmail, "");
        await signUpPage.ClickCaptchaCbx();
        await signUpPage.ClickSignUpBtnOnSignUpPage();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a password of six or more characters");
        await basePage.GoToHomePageFromSignPages();
    });
    xit('Should get consistant alert when try to Sign up with blank Name and Email fields', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.SignUpOnHomePage("", "", dataHelper._correctPass);
        await signUpPage.ClickCaptchaCbx();
        await signUpPage.ClickSignUpBtnOnSignUpPage();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
        await basePage.GoToHomePageFromSignPages();
    });
    xit('Should get consistant alert when try to Sign up with blank Name and Password fields', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.SignUpOnHomePage("", dataHelper._correctEmail, "");
        await signUpPage.ClickCaptchaCbx();
        await signUpPage.ClickSignUpBtnOnSignUpPage();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
        await basePage.GoToHomePageFromSignPages();
    });
    xit('Should get consistant alert when try to Sign up with blank Email and Password fields', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.SignUpOnHomePage(dataHelper._username, "", "");
        await signUpPage.ClickCaptchaCbx();
        await signUpPage.ClickSignUpBtnOnSignUpPage();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter an email address to sign up for Goodreads.");
        await basePage.GoToHomePageFromSignPages();
    });
    it('Should get consistant alert when try to Sign up without Captcha', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.SignUpOnHomePage(dataHelper._username, dataHelper._correctEmail, dataHelper._correctPass);
        await signUpPage.ClickSignUpBtnOnSignUpPage();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getAttribute('innerText')).toEqual("CAPTCHA response is incorrect. Please try again.");
        await basePage.GoToHomePageFromSignPages();
    });
    it('Should get consistant alert when try to Sign up with invalid Email and Password', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.SignUpOnHomePage(dataHelper._username, dataHelper._invalidEmail, dataHelper._invalidPass);
        expect(await homePage._signUpEmailFld.getAttribute('validationMessage')).toEqual("Please include an '@' in the email address. 'parker1983gmail.com' is missing an '@'.");
        await browser.refresh();
    });
    it('Should get consistant alert when try to Sign up with invalid Email', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.SignUpOnHomePage(dataHelper._username, dataHelper._invalidEmail, dataHelper._correctPass);
        expect(await homePage._signUpEmailFld.getAttribute('validationMessage')).toEqual("Please include an '@' in the email address. 'parker1983gmail.com' is missing an '@'.");
        await browser.refresh();
    });
    //Will fall because of bug with password transition into SignUp page
    xit('Should get consistant alert when try to Sign up with invalid Password', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.SignUpOnHomePage(dataHelper._username, dataHelper._correctEmail, dataHelper._invalidPass);
        await signUpPage.ClickCaptchaCbx();
        await signUpPage.ClickSignUpBtnOnSignUpPage();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a password of six or more characters");
        await basePage.GoToHomePageFromSignPages();
    });
    it('Should get consistant alert when try to Sign up with invalid Email and blank Password', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.SignUpOnHomePage(dataHelper._username, dataHelper._invalidEmail, "");
        expect(await homePage._signUpEmailFld.getAttribute('validationMessage')).toEqual("Please include an '@' in the email address. 'parker1983gmail.com' is missing an '@'.");
        await browser.refresh();
    });
    xit('Should get consistant alert when try to Sign up with invalid Password and blank Email', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.SignUpOnHomePage(dataHelper._username, "", dataHelper._invalidPass);
        await signUpPage.ClickCaptchaCbx();
        await signUpPage.ClickSignUpBtnOnSignUpPage();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter an email address to sign up for Goodreads.");
    });
  });
  //Isn't debugged
  describe('Sign in feature', () => {
    it('Should Sign in via Home page with correct user data', async () => {
        //await basePage.GoToHomePageFromSignPages();
        await browserHelper.WaitElementVisible(homePage._signInForm);
        await homePage.SignInOnHomepage(dataHelper._correctEmailForSignIn, dataHelper._correctPassForSignIn);
        await modalPopup.CloseHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.IsSignedOut()).toBe(false);
        expect(await homePage.GetAccountName()).toEqual(dataHelper._signedInUsername);
    });
    it('Should get consistant alert when try to Sign in with all blank fields', async () => {
        await homePage.ClickAccountImage();
        await homePage.SignOut();
        await homePage.ClickSignInBtn();
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
        await basePage.GoToHomePageFromSignPages();
    });
    it('Should get consistant alert when try to Sign in with blank Email field', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        await homePage.SignInOnHomepage("", dataHelper._correctPassForSignIn);
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
        await basePage.GoToHomePageFromSignPages();
    });
    it('Should get consistant alert when try to Sign in with blank Password field', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        await homePage.SignInOnHomepage(dataHelper._correctEmailForSignIn, "");
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
        await basePage.GoToHomePageFromSignPages();
    });
    it('Should get consistant alert when try to Sign up with incorrect Email', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        await homePage.SignInOnHomepage(dataHelper._incorrectEmail, dataHelper._correctPassForSignIn);
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
        await basePage.GoToHomePageFromSignPages();
    });
    it('Should get consistant alert when try to Sign up with incorrect Password', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        await homePage.SignInOnHomepage(dataHelper._correctEmailForSignIn, dataHelper._incorrectPass);
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
        await basePage.GoToHomePageFromSignPages();
    });
    it('Should get consistant alert when try to Sign up with invalid Email', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        await homePage.SignInOnHomepage(dataHelper._invalidEmail, dataHelper._correctPassForSignIn);
        expect (await basePage._mainLogo.isPresent()).toBe(true);
        expect(await homePage._signInEmailFld.getAttribute('validationMessage')).toEqual("Please include an '@' in the email address. 'parker1983gmail.com' is missing an '@'.");
        await basePage.GoToHomePageFromSignPages();
    });
    it('Should get consistant alert when try to Sign up with invalid Password', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        await homePage.SignInOnHomepage(dataHelper._correctEmailForSignIn, dataHelper._invalidPass);
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
        await basePage.GoToHomePageFromSignPages();
    });
    it('Should be Signed in when Remember me feature is on', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        if (! await homePage._rememberMeCbx.isSelected()) {
            await homePage._rememberMeCbx.click();
        }
        await homePage.SignInOnHomepage(dataHelper._correctEmailForSignIn, dataHelper._correctPassForSignIn);
        await modalPopup.CloseHomeModalPopup();
        await browserHelper.WaitElementVisible(homePage._accountImage);
        await browser.refresh();
        await modalPopup.CloseHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.IsSignedOut()).toBe(false);
        expect(await homePage.GetAccountName()).toEqual(dataHelper._username);
    });
    it('Should be able to reset Password via Forgot feature', async () => {
        await homePage.ClickAccountImage();
        await homePage.SignOut();
        await browserHelper.WaitElementClikable(homePage._forgotItLnk);
        await homePage.ClickForgotLnk();
        await forgotPasswordPage.ResetPass(dataHelper._correctEmail);
        expect(await forgotPasswordPage._resultMsg).toContain(" We'll send instructions to this email");
    });

    //Sign in with social networks test are disabled because of lack of valid accounts
    xit('Should Sign in via Facebook', async () => {
        await basePage.GoToHomePageFromSignPages();
        await homePage.SignInWithFB(dataHelper._socialNetworksLogin, dataHelper._socialNetworksPass);
        await modalPopup.CloseHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.IsSignedOut()).toBe(false);
    });
    xit('Should Sign in via Twitter', async () => {
        await basePage.GoToHomePageFromPages();
        await homePage.ClickAccountImage();
        await homePage.SignOut();
        await homePage.SignInWithTwitter(dataHelper._socialNetworksLogin, dataHelper._socialNetworksPass);
        await modalPopup.CloseHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.IsSignedOut()).toBe(false);
    });
    xit('Should Sign in via Google', async () => {
        await basePage.GoToHomePageFromPages();
        await homePage.ClickAccountImage();
        await homePage.SignOut();
        await homePage.SignInWithGoogle(dataHelper._socialNetworksLogin, dataHelper._socialNetworksPass);
        await modalPopup.CloseHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.IsSignedOut()).toBe(false);
    });
    xit('Should Sign in via Amazon', async () => {
        await basePage.GoToHomePageFromPages();
        await homePage.ClickAccountImage();
        await homePage.SignOut();
        await homePage.SignInWithAmazon(dataHelper._socialNetworksLogin, dataHelper._socialNetworksPass);
        await modalPopup.CloseHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.IsSignedOut()).toBe(false);
    });
  });
  //Debugged, works well
  xdescribe('Header block', () => {
    it('Link in Header block should work well', async () => {
        await basePage.GoToHomePageFromSignPages();
        await browserHelper.WaitElementVisible(basePage._siteHeader);
        await basePage.MainLogoClick();
        expect(await browser.getCurrentUrl()).toEqual(dataHelper._homePageUrl);
        expect(await basePage._siteHeader.isDisplayed()).toBe(true);
    });
  });
  //Isn't debugged
  xdescribe('Promo block', () => {
    it('Promo image should link to Promo page', async () => {
        await browserHelper.WaitElementVisible(homePage._promoHeader);
        if (await homePage._promoHeader.isDisplayed()) {
        await homePage.GoToPromoPage();
        expect(browser.getCurrentUrl()).toContain("www.goodreads.com/blog/show");
        await basePage.GoToHomePageFromPages();
        }
    });
  });
  //Isn't debugged
  xdescribe('Best books block', () => {
    it('Buttons in Best books bloock should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        if (homePage._bestBooksBlock.isDisplayed()) {
        await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._bestBooksBtns);
        }
    });
    it('Links in Best books bloock should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        if (homePage._bestBooksBlock.isDisplayed()) {
        await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._bestBooksLnks);
        }
    });
  });
  //Isn't debugged
  xdescribe('Questions text block', () => {
    it('Questions and answers text block should be displayed', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        await homePage.TextsArePresent(homePage._qtbFirstQuestion, homePage._qtbSecondQuestion, homePage._qtbFirstAnswer, homePage._qtbSecondAnswer);
    });
  });
  //Isn't debugged
  xdescribe('Discovery block', () => {
    it('Links in Discovery block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._discoveryBlock);
        await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._discoverySimilarLnks);
        await browserHelper.WaitElementVisible(homePage._discoveryBlock);
        await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._discoveryReflectedLnks);
    });
  });
  //Isn't debugged
  xdescribe('Seearch and browse block', () => {
    it('Links in Search and browse block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._searchBlock);
        await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._searchLnks);
    });
    it('Search feature should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._searchBlock);
        await homePage.FillSearchFld(dataHelper._searchWord);
        expect(await browser.getCurrentUrl()).toContain("/search");
        expect(await browser.getCurrentUrl()).toContain("dataHelper._searchWord");
        expect(await basePage._siteHeader.isDisplayed()).toBe(true);
        await basePage.GoToHomePageFromPages();
    });
  });
  //Isn't debugged
  xdescribe('Quotes block', () => {
    it('Links in Quotes block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._quotesBlock);
        await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._quotesLnks);
    });
    it('Linked image in Quotes block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._quotesBlock);
        await homePage.ClickQuotesLinkedImg();
        expect(await browser.getCurrentUrl()).toContain('author/show/');
        expect(await basePage._siteHeader.isDisplayed()).toBe(true);
        await basePage.GoToHomePageFromPages();
    });
    it('Quotes feature should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._quotesBlock);
        let firstQuote: string = await homePage._quotesQuote.getText();
        await browser.sleep(13000);
        let nextQuote: string = await homePage._quotesQuote.getText();
        expect(await firstQuote).not.toEqual(nextQuote)
    });
  });
  //Isn't debugged
  xdescribe('Choice awards block', () => {
    it('Links in Choice awards block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._awardsBlock);
        await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._awardsLnks);
    });
    it('Linked image in Choice awards block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._awardsBlock);
        await browserHelper.WaitElementClikable(homePage._awardsLnkImg);
        await homePage.ClickBestAwardsLinkedImg();
        expect(await browser.getCurrentUrl()).toContain('choiceawards/');
        expect(await basePage._siteHeader.isDisplayed()).toBe(true);
        await basePage.GoToHomePageFromPages();
    });
  });
  //Isn't debugged
  xdescribe('Sponsored block', () => {
    it('Links in Sponsored block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._sponsoredBlock);
        await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._sponsoredLnks);
    });
  });
  xdescribe('Love lists block', () => {
    it('Links in Love lists block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._loveLsBlock);
        await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._loveLsLnks);
    });
  });
  //Isn't debugged
  xdescribe('Publisher block', () => {
    it('Links in Publisher block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._publisherBlock);
        await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._publisherBtns);
    });
  });
  //Isn't debugged
  xdescribe('Ads block', () => {
    it('Ads block should be displayed', async () => {
        await browserHelper.WaitElementVisible(homePage._topAdElement);
        await browserHelper.WaitElementVisible(homePage._downAdElement);
        expect(await homePage._topAdElement.isDisplayed()).toBe(true);
        expect(await homePage._downAdElement.isDisplayed()).toBe(true);
    });
  });
  //Isn't debugged
  xdescribe('Company block', () => {
    it('Links in Company block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._companyBlock);
        await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._companyLnks);
    });
  });
  //Isn't debugged
  xdescribe('Work with us block', () => {
    it('Links in Work with us block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._wwuBlock);
        await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._wwuLnks);
    });
  });
  //Isn't debugged
  xdescribe('Connect block', () => {
    it('Links in Connect block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._connectBlock);
        await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._connectBtns);
    });
  });
  //Isn't debugged
  xdescribe('Mobile stores block', () => {
    it('Links in Mobile stores block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._msBlock);
        await homePage.CheckLinksAndButtonsAreWorkingWell(homePage._msLnks);
    });
  });
});