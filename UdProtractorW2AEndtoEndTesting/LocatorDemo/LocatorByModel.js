describe('Locator testing by Model', () => {



    it('Automting User Registration Form', () => {
        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");

        element(by.model("Auth.user.name")).sendKeys("angular");
        element(by.model("Auth.user.password")).sendKeys("password");
        element(by.model("model[options.key]")).sendKeys("Raman");
 
        element(by.buttonText("Login")).click();
 
        browser.sleep(2000);
        element(by.className("ng-scope")).getText().then(function(text){
 
            console.log(text);
            expect(text).toContain("Home");
        
    });

});
    
});