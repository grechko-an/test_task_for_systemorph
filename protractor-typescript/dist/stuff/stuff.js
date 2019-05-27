/*
    describe('Sign up and Sign out features', () => {

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
    */ 
//# sourceMappingURL=stuff.js.map