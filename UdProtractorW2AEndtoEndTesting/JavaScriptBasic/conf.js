exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // specs: ['todo-spec.js.js'],
    directConnect: true,
    framework: "jasmine",
    specs: ['protpromises.js'],
    getPageTimeout: 120000,
    
    //specs: ['todo-spec.js'],

    capabilities: {
      browserName: 'firefox',

    },
    allScriptsTimeout: 50000,
    
    onPrepare: function() {
      browser.manage().timeouts().implicitlyWait(15000)
    },

    jasmineNodeOpts:{
      defaultTimeoutInterval: 50000
    }

  }

  