exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // specs: ['todo-spec.js.js'],
    directConnect: true,
    framework: "jasmine",
    specs: ['Banking.js'],
    params: {
      url: 'http://www.way2automation.com/angularjs-protractor/banking/#/login"'

    },

   getPageTimeout: 120000,

    capabilities: {
      browserName: 'chrome',

    },

    allScriptsTimeout: 50000,
    
    onPrepare: function() {
      browser.manage().timeouts().implicitlyWait(15000)
    },

    jasmineNodeOpts:{
      defaultTimeoutInterval: 50000,
      showColors: true

    }

  }

  