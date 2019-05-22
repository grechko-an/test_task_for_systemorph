import { Config, browser } from 'protractor';
import { SpecReporter } from 'jasmine-spec-reporter';

export let config: Config = {

  allScriptsTimeout: 15000,
  framework: 'jasmine',
  capabilities: {
    browserName: 'firefox'
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
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }

  //seleniumAddress: 'http://localhost:4444/wd/hub'
};
