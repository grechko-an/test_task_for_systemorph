import { Config, browser } from 'protractor';
import { SpecReporter } from 'jasmine-spec-reporter';
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

export let config: Config = {
  allScriptsTimeout: 15000,
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome',
   //Use headless mode 
   /* chromeOptions: {
       args: [ "--headless", "--disable-gpu"]
     }*/
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 15000,
    print: function() {}
  },
  baseUrl: 'https://www.goodreads.com/',
  specs: [ 'specs/**/*spec.js' ],
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.get('');
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: './report/screenshots',
        cleanDestination: true,
        screenshotsFolder: 'images',
        fileName: 'report',
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: true
      })
    );
  }
  //seleniumAddress: 'http://localhost:4444/wd/hub'
};
