import { browser } from 'protractor';
import { HomePage } from '../pages/homePage.po';
import { browserHelper } from "../helpers/browserHelper"

import chai = require('chai');
import { async } from 'q';

//chai.use(require('chai-smoothie'));
//const expect = chai.expect;

describe('Home Page', () => {

  const homePage = new HomePage();

  describe('Page at least opens', () => {

      it('Home page should be opened', async () => {
          await browserHelper.WaitElementVisible(homePage.mainLogo);
          expect(homePage.mainLogo.isPresent()).toBe(true);
          await browserHelper.WaitElementVisible(homePage.siteSloganText);
          expect(homePage.siteSloganText.isPresent()).toBe(true);
      });

  });

  describe('Sign up functionality', () => {

    it('Should get consistant alert when try to Sign up with all blank fields', async () => {
        await browserHelper.WaitElementVisible(homePage.mainLogo);
        expect(homePage.mainLogo.isPresent()).toBe(true);
        await browserHelper.WaitElementVisible(homePage.siteSloganText);
        expect(homePage.siteSloganText.isPresent()).toBe(true);
    });

});





});