var helper = require('./helper')

describe('Protractor Demo App', function(){

    // it('should hava a title', () => {

    //     browser.get('http://juliemr.github.io/protractor-demo/');
    //     expect(browser.getTitle()).toEqual('Super Calculator');
        
    // });

    it('should hava a title', () => {

        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get(browser.params.url);
        expect(browser.getTitle()).toEqual('Etsy - Shop for handmade, vintage, custom, and unique gifts for everyone');
        
    });

    it('should sign in', () => {
     browser.get(browser.params.url);
     var signInButton = element(by.id('sign-in'));
     var usernameField = element(by.id('join_neu_email_field'));
     var userpasswordField = element(by.id('join_neu_password_field'));
     var loginInButton = element(by.name('submit_attempt'));
     var loginErrorMessage = element(by.id('aria-join_neu_password_field-error'));

     helper.waitUntilReady(signInButton);
     signInButton.click();
     helper.waitUntilReady(usernameField);
    
     
    //  .then(() =>{
    //     browser.wait(5000);
    //     });
     //usernameField.clear();
     usernameField.sendKeys('test@test.com');
     userpasswordField.sendKeys('password');
     loginInButton.click();
     helper.waitUntilReady(loginErrorMessage )
     let passwordErrorMessage = loginErrorMessage.getText()
     expect(passwordErrorMessage).toBe('Password was incorrect.');
           


    });



});


