import { browser, protractor } from 'protractor';
import { BasePage } from "../pages/basePage.po"
import { HomePage } from '../pages/homePage.po';
import { browserHelper } from "../helpers/browserHelper";
import { SignUp } from "../pages/signUpPage.po";
import { SignIn } from "../pages/signInPage.to"
import { DataHelper } from "../data/dataHelper";
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


  describe('Smoke test', () => {

      it('Home page should be opened', async () => {
          await browserHelper.WaitElementVisible(basePage._mainLogo);
          expect(await basePage._mainLogo.isDisplayed()).toBe(true);
          await browserHelper.WaitElementVisible(homePage._signInForm);
          expect(await homePage._signInForm.isDisplayed()).toBe(true);
      });

  });

  xdescribe('Sign up and Sign out features', () => {

    it('Should Sign up via Home page with correct user data', async () => {
        await homePage.signUpOnHomePage(dataHelper._username, dataHelper._correctEmail, dataHelper._correctPass);
        await homePage.signUpOnSignUpPage();
        await modalPopup.closeHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await homePage.getAccountName()).toEqual(dataHelper._username);
        expect(await basePage.isSignedOut()).toBe(false);
    });

    it('Should Sign out well', async () => {
        await homePage.signOut();
        await browserHelper.WaitElementVisible(homePage._signInForm);
        expect(await homePage._signInForm.isPresent()).toBe(true);
        expect(await homePage._promoHeader.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(true);
    });


    it('Should get consistant alert when try to Sign up with blank fields', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        await signUpPage.clickCaptchaCbx();
        await signUpPage._signUpBtn.click();
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
        await browser.navigate().back();
    });

    it('Should get consistant alert when try to Sign up with blank Name field', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.signUpOnHomePage(null, dataHelper._correctEmail, dataHelper._correctPass);
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        await signUpPage.clickCaptchaCbx();
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
        await browser.navigate().back();
    });

    it('Should get consistant alert when try to Sign up with blank Email field', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.signUpOnHomePage(dataHelper._username, null, dataHelper._correctPass);
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        await signUpPage.clickCaptchaCbx();
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter an email address to sign up for Goodreads.");
        await browser.navigate().back();
    });

    //Will fail because of bug with password transition into SignUp page
    it('Should get consistant alert when try to Sign up with blank Password field', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.signUpOnHomePage(dataHelper._username, dataHelper._correctEmail, null);
        await signUpPage.clickCaptchaCbx();
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a password of six or more characters");
        await browser.navigate().back();
    });

    it('Should get consistant alert when try to Sign up with blank Name and Email fields', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.signUpOnHomePage(null, null, dataHelper._correctPass);
        await signUpPage.clickCaptchaCbx();
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
        await browser.navigate().back();
    });

    it('Should get consistant alert when try to Sign up with blank Name and Password fields', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.signUpOnHomePage(null, dataHelper._correctEmail, null);
        await signUpPage.clickCaptchaCbx();
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a name to sign up for Goodreads.");
        await browser.navigate().back();
    });

    it('Should get consistant alert when try to Sign up with blank Email and Password fields', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.signUpOnHomePage(dataHelper._username, null, null);
        await signUpPage.clickCaptchaCbx();
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter an email address to sign up for Goodreads.");
        await browser.navigate().back();
    });

    it('Should get consistant alert when try to Sign up without Captcha', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.signUpOnHomePage(dataHelper._username, dataHelper._correctEmail, dataHelper._correctPass);
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" CAPTCHA response is incorrect. Please try again.");
        await browser.navigate().back();
    });

    it('Should get consistant alert when try to Sign up with invalid Email and Password', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.signUpOnHomePage(dataHelper._username, dataHelper._invalidEmail, dataHelper._invalidPass);
        expect(await homePage._signUpEmailFld.getAttribute('validationMessage')).toEqual("Please include an '@' in the email address. 'parker1983gmail.com' is missing an '@'.");
        await browser.refresh();
    });

    it('Should get consistant alert when try to Sign up with invalid Email', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.signUpOnHomePage(dataHelper._username, dataHelper._invalidEmail, dataHelper._correctPass);
        expect(await homePage._signUpEmailFld.getAttribute('validationMessage')).toEqual("Please include an '@' in the email address. 'parker1983gmail.com' is missing an '@'.");
        await browser.refresh();
    });

    //Will fail because of bug with password transition into SignUp page
    it('Should get consistant alert when try to Sign up with invalid Password', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.signUpOnHomePage(dataHelper._username, dataHelper._correctEmail, dataHelper._invalidPass);
        await signUpPage.clickCaptchaCbx();
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter a password of six or more characters");
        await browser.navigate().back();
    });

    it('Should get consistant alert when try to Sign up with invalid Email and blank Password', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.signUpOnHomePage(dataHelper._username, dataHelper._invalidEmail, null);
        expect(await homePage._signUpEmailFld.getAttribute('validationMessage')).toEqual("Please include an '@' in the email address. 'parker1983gmail.com' is missing an '@'.");
        await browser.refresh();
    });

    it('Should get consistant alert when try to Sign up with invalid Password and blank Email', async () => {
        await browserHelper.WaitElementVisible(homePage._signUpForm);
        await homePage.signUpOnHomePage(dataHelper._username, null, dataHelper._invalidPass);
        await signUpPage.clickCaptchaCbx();
        await signUpPage._signUpBtn.click();
        await browserHelper.WaitElementVisible(signUpPage._pageTitle);
        expect(await signUpPage._alertTxt.getText()).toEqual(" Sorry, you must enter an email address to sign up for Goodreads.");
    });

  });

  xdescribe('Sign in feature', () => {

    it('Should Sign in via Home page with correct user data', async () => {
        await browser.navigate().back();
        await homePage.signInOnHomepage(dataHelper._correctEmail, dataHelper._correctPass);
        await modalPopup.closeHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(false);
        expect(await homePage.getAccountName()).toEqual(dataHelper._username);
    });

    it('Should get consistant alert when try to Sign in with all blank fields', async () => {
        await homePage.signOut();
        await homePage.signInOnHomepage(null, null);
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
        await browser.navigate().back();
    });

    it('Should get consistant alert when try to Sign in with blank Email field', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        await homePage.signInOnHomepage(null, dataHelper._correctPass);
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
        await browser.navigate().back();
    });

    it('Should get consistant alert when try to Sign in with blank Password field', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        await homePage.signInOnHomepage(dataHelper._correctEmail, null);
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
        await browser.navigate().back();
    });

    it('Should get consistant alert when try to Sign up with incorrect Email', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        await homePage.signInOnHomepage(dataHelper._incorrectEmail, dataHelper._correctPass);
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
        await browser.navigate().back();
    });

    it('Should get consistant alert when try to Sign up with incorrect Password', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        await homePage.signInOnHomepage(dataHelper._correctEmail, dataHelper._incorrectPass);
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
        await browser.navigate().back();
    });

    it('Should get consistant alert when try to Sign up with invalid Email', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        await homePage.signInOnHomepage(dataHelper._invalidEmail, dataHelper._correctPass);
        expect (await basePage._mainLogo.isPresent()).toBe(true);
        expect(await homePage._signInEmailFld.getAttribute('validationMessage')).toEqual("Please include an '@' in the email address. 'parker1983gmail.com' is missing an '@'.");
        await browser.navigate().back();
    });

    it('Should get consistant alert when try to Sign up with invalid Password', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        await homePage.signInOnHomepage(dataHelper._correctEmail, dataHelper._invalidPass);
        await browserHelper.WaitElementVisible(signInPage._alertTxt);
        expect(await signInPage._alertTxt.getText()).toEqual(' Sorry, we didn’t recognize that email/password combination. Please try again.');
        await browser.navigate().back();
    });

    it('Should be Signed in when Remember me feature is on', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        if (! await homePage._rememberMeCbx.isSelected()) {
            await homePage._rememberMeCbx.click();
        }
        await homePage.signInOnHomepage(dataHelper._correctEmail, dataHelper._correctPass);
        await modalPopup.closeHomeModalPopup();
        await browserHelper.WaitElementVisible(homePage._accountImage);
        await browser.refresh();
        await modalPopup.closeHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(false);
        expect(await homePage.getAccountName()).toEqual(dataHelper._username);
    });

    it('Should be able to reset Password via Forgot feature', async () => {
        await browserHelper.WaitElementClikable(homePage._accountImage);
        await homePage._accountImage.click();
        await homePage.signOut();
        await browserHelper.WaitElementClikable(homePage._forgotItLnk);
        await homePage._forgotItLnk.click();
        await forgotPasswordPage.resetPass(dataHelper._correctEmail);
        expect(await forgotPasswordPage._resultMsg).toContain(" We'll send instructions to this email");
    });

    xit('Should Sign in via Facebook', async () => {
        await browser.navigate().back();
        await homePage.signInWithFB(dataHelper._socialNetworksLogin, dataHelper._socialNetworksPass);
        await modalPopup.closeHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(false);
    });

    xit('Should Sign in via Twitter', async () => {
        await browserHelper.WaitElementClikable(this._accountImage);
        await this._accountImage.click();
        await homePage.signOut();
        await homePage.signInWithTwitter(dataHelper._socialNetworksLogin, dataHelper._socialNetworksPass);
        await modalPopup.closeHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(false);
    });

    xit('Should Sign in via Google', async () => {
        await browserHelper.WaitElementClikable(this._accountImage);
        await this._accountImage.click();
        await homePage.signOut();
        await homePage.signInWithGoogle(dataHelper._socialNetworksLogin, dataHelper._socialNetworksPass);
        await modalPopup.closeHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(false);
    });

    xit('Should Sign in via Amazon', async () => {
        await browserHelper.WaitElementClikable(this._accountImage);
        await this._accountImage.click();
        await homePage.signOut();
        await homePage.signInWithAmazon(dataHelper._socialNetworksLogin, dataHelper._socialNetworksPass);
        await modalPopup.closeHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(false);
    });
  });

  xdescribe('Promo block', () => {
    it('Promo image should link to Promo page', async () => {
        await browser.navigate().back();
        if (homePage._promoHeader.isDisplayed()) {
        await homePage.goToPromoPage(homePage._promoHeader);
        expect(browser.getCurrentUrl()).toContain("www.goodreads.com/blog/show");
        await browser.navigate().back();
        }
    });
  });

  xdescribe('Best books block', () => {
    it('Buttons in Best books bloock should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        if (homePage._bestBooksBlock.isDisplayed()) {
        await homePage.checkLinksAndButtonsAreWorkingWell(homePage._bestBooksBtns);
        }
    });
    it('Links in Best books bloock should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        if (homePage._bestBooksBlock.isDisplayed()) {
        await homePage.checkLinksAndButtonsAreWorkingWell(homePage._bestBooksLnks);
        }
    });
  });

  xdescribe('Questions text block', () => {
    it('Questions and answers text block should be displayed', async () => {
        await browserHelper.WaitElementVisible(homePage._signInForm);
        await homePage.textsArePresent(homePage._qtbFirstQuestion, homePage._qtbSecondQuestion, homePage._qtbFirstAnswer, homePage._qtbSecondAnswer);
    });
  });

  xdescribe('Discovery block', () => {
    it('Links in Discovery block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._discoveryBlock);
        await homePage.checkLinksAndButtonsAreWorkingWell(homePage._discoverySimilarLnks);
        await browserHelper.WaitElementVisible(homePage._discoveryBlock);
        await homePage.checkLinksAndButtonsAreWorkingWell(homePage._discoveryReflectedLnks);
    });
  });

  xdescribe('Discovery block', () => {
    it('Links in Discovery block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._discoveryBlock);
        await homePage.checkImageLinksAreWorkingWell(homePage._discoverySimilarLnks);
        await browserHelper.WaitElementVisible(homePage._discoveryBlock);
        await homePage.checkImageLinksAreWorkingWell(homePage._discoveryReflectedLnks);
    });
  });

  xdescribe('Seearch and browse block', () => {
    it('Links in Search and browse block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._searchBlock);
        await homePage.checkLinksAndButtonsAreWorkingWell(homePage._searchLnks);
    });

    it('Search feature should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._searchBlock);
        await browserHelper.WaitElementClikable(homePage._searchFld);
        await homePage._searchFld.click();
        await homePage._searchFld.sendKeys(dataHelper._searchWord);
        await homePage._searchBtn.click();
        expect(await browser.getCurrentUrl()).toContain("/search");
        expect(await browser.getCurrentUrl()).toContain("dataHelper._searchWord");
        expect(await basePage._siteHeader.isDisplayed()).toBe(true);
        await browser.navigate().back();
    });
  });

  xdescribe('Quotes block', () => {
    it('Links in Quotes block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._quotesBlock);
        await homePage.checkLinksAndButtonsAreWorkingWell(homePage._quotesLnks);
    });

    it('Linked image in Quotes block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._quotesBlock);
        await homePage._quotesLnkImg.click
        expect(await browser.getCurrentUrl()).toContain('author/show/');
        expect(await basePage._siteHeader.isDisplayed()).toBe(true);
        await browser.navigate().back();
    });

    it('Quotes feature should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._quotesBlock);
        let firstQuote: string = await homePage._quotesQuote.getText();
        await browser.sleep(13000);
        let nextQuote: string = await homePage._quotesQuote.getText();
        expect(await firstQuote).not.toEqual(nextQuote)
    });
  });

  xdescribe('Choice awards block', () => {
    it('Links in Choice awards block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._awardsBlock);
        await homePage.checkLinksAndButtonsAreWorkingWell(homePage._awardsLnks);
    });

    it('Linked image in Choice awards block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._awardsBlock);
        await browserHelper.WaitElementClikable(homePage._awardsLnkImg);
        await homePage._awardsLnkImg.click();
        expect(await browser.getCurrentUrl()).toContain('choiceawards/');
        expect(await basePage._siteHeader.isDisplayed()).toBe(true);
        await browser.navigate().back();
    });
  });

  xdescribe('Sponsored block', () => {
    it('Links in Sponsored block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._sponsoredBlock);
        await homePage.checkLinksAndButtonsAreWorkingWell(homePage._sponsoredLnks);
    });
  });

  xdescribe('Love lists block', () => {
    it('Links in Love lists block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._loveLsBlock);
        await homePage.checkLinksAndButtonsAreWorkingWell(homePage._loveLsLnks);
    });
  });

  xdescribe('Publisher block', () => {
    it('Links in Publisher block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._publisherBlock);
        await homePage.checkLinksAndButtonsAreWorkingWell(homePage._publisherBtns);
    });
  });

  xdescribe('Ads block', () => {
    it('Ads block should be displayed', async () => {
        await browserHelper.WaitElementVisible(homePage._topAdElement);
        await browserHelper.WaitElementVisible(homePage._downAdElement);
        expect(await homePage._topAdElement.isDisplayed()).toBe(true);
        expect(await homePage._downAdElement.isDisplayed()).toBe(true);
    });
  });

  xdescribe('Company block', () => {
    it('Links in Company block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._companyBlock);
        await homePage.checkLinksAndButtonsAreWorkingWell(homePage._companyLnks);
    });
  });

  xdescribe('Work with us block', () => {
    it('Links in Work with us block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._wwuBlock);
        await homePage.checkLinksAndButtonsAreWorkingWell(homePage._wwuLnks);
    });
  });

  xdescribe('Connect block', () => {
    it('Links in Connect block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._connectBlock);
        await homePage.checkLinksAndButtonsAreWorkingWell(homePage._connectBtns);
    });
  });

  xdescribe('Mobile stores block', () => {
    it('Links in Mobile stores block should work well', async () => {
        await browserHelper.WaitElementVisible(homePage._msBlock);
        await homePage.checkLinksAndButtonsAreWorkingWell(homePage._msLnks);
    });
  });

});