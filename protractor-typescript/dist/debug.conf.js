"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
exports.config = {
    allScriptsTimeout: 15000,
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 15000,
        print: function () { }
    },
    baseUrl: 'https://www.goodreads.com/',
    specs: ['specs/**/*spec.js'],
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.get('');
        jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter());
        /*jasmine.getEnv().addReporter(new SpecReporter({
          spec: {
            displayStacktrace: true
          },
          summary: {
            displayDuration: false
          }
        }));*/
    }
    //seleniumAddress: 'http://localhost:4444/wd/hub'
};
//# sourceMappingURL=debug.conf.js.map