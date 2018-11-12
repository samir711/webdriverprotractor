exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // specs: ['todo-spec.js.js'],
    directConnect: true,
    framework: "jasmine",
    specs: ['spec.js'],
    params: {
      url: 'https://www.etsy.com'

    },

    getPageTimeout: 120000,

    onPrepare: function(){
      browser.ignoreSynchronization = true;
    },

    //specs: ['todo-spec.js'],
    capabilities: {
      browserName: 'chrome',

    },
    allScriptsTimeout: 50000,
    
    onPrepare: function() {
      browser.manage().timeouts().implicitlyWait(15000)
    },

    jasmineNodeOpts:{
      defaultTimeoutInterval: 50000
    }

  }

