import { HomePage } from "../pages/homePage.po";

/*
    describe('Sign up and Sign out features', () => {

    code snippet for "for of" cycle
    import { forOf } from 'dojo-shim/iterator';

        let map = new Map<string, string>();
        map.set('hello', 'world');

        forOf(map.keys(), (key) => {
        console.log(key);
    }); 

    it('Should Sign out well', async () => {
        if (basePage.isSignedOut()) {
            await basePage._mainLogo.click();
            await browserHelper.WaitElementClikable(homePage._signUpBtn);
            await homePage._signUpBtn.click();
            await signUpPage.signUpOnSignUpPage(dataHelper._username, dataHelper._correctEmail, dataHelper._correctPass);
            await modalPopup.closeHomeModalPopup();
        };
        await homePage.signOut();
        await browserHelper.WaitElementVisible(homePage._signInForm);
        expect(await homePage._signInForm.isPresent()).toBe(true);
        expect(await homePage._promoHeader.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(true);
    });


        it('Should directly Sign up via Sign up page with correct user data', async () => {
        if (!basePage.isSignedOut()) {
            await homePage._homeBtn.click();
            await modalPopup.closeHomeModalPopup();
            await homePage.signOut();
        };
        await browserHelper.WaitElementClikable(homePage._signUpBtn);
        await homePage._signUpBtn.click();
        await signUpPage.signUpOnSignUpPage(dataHelper._username, dataHelper._correctEmail, dataHelper._correctPass);
        await modalPopup.closeHomeModalPopup();
        expect(await homePage._accountImage.isPresent()).toBe(true);
        expect(await basePage.isSignedOut()).toBe(false);
        expect(await homePage.getAccountName()).toEqual(dataHelper._username);
    });
    
    from signOut() 
    await browserHelper.WaitElementClikable(this._accountImage);
    await this._accountImage.click();
    }
    
    from HomePage

    public async CheckImagedLinksAreWorkingWell(arrayOfElements): Promise<void> {
        for (var element of arrayOfElements) {
          await browserHelper.WaitElementClikable(element);
          await element.click();
          expect(await browser.getCurrentUrl()).toContain("book/show/");
          expect(await basePage._siteHeader.isDisplayed()).toBe(true);
          await basePage.GoToHomePageFromPages();
        }
      };
       
*/