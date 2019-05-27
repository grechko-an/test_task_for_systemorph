"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
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
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './report/screenshots',
            cleanDestination: true,
            screenshotsFolder: 'images',
            fileName: 'report',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true
        }));
    }
    //seleniumAddress: 'http://localhost:4444/wd/hub'
};
//# sourceMappingURL=conf.js.map