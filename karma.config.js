// Karma configuration
// Generated on Tue Feb 04 2014 11:26:17 GMT-0500 (EST)
const puppeteer = require('puppeteer');
process.env.CHROME_BIN = puppeteer.executablePath();


module.exports = function(config) {
  config.set({
    basePath: '',
    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-resource/angular-resource.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './angular-hyper-resource.js',
      './angular-hyper-resource.spec.js',
    ],

    exclude: [],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    captureTimeout: 60000,
    singleRun: true,
    plugins: ['karma-chrome-launcher','karma-jasmine']
  });
};
