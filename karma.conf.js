module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      jasmine: {
        // you can add special configurations here if needed
      },
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
    },
    reporters: ['progress', 'kjhtml'],
    browsers: ['Chrome', 'ChromeHeadless'],
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: ['--headless', '--disable-gpu', '--no-sandbox', '--remote-debugging-port=9222'],
      },
    },
    restartOnFileChange: true,
  });
};
