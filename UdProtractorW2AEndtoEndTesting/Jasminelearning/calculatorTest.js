describe('Validating the calculator ap', () => {

    beforeEach(() => {

       browser.get("http://www.way2automation.com/angularjs-protractor/calc/");

    });
    
    afterEach(() => {
        browser.sleep(3000);
        console.log("after it block");

    });

    it('Validate 1 + 1 = 2', () => {

             
        element(by.model("first")).sendKeys("1");
        element(by.model("second")).sendKeys("1");
        element(by.buttonText("Go!")).click();
        
        element(by.binding("latest")).getText().then((text) =>{
          
            console.log("The result is : " + text);


        });
      
    });
    it('Validate 2 + 2 = 4', () => {

      //  browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        
        element(by.model("first")).sendKeys("2");
        element(by.model("second")).sendKeys("2");
        element(by.buttonText("Go!")).click();
        
        element(by.binding("latest")).getText().then((text) =>{
          
            console.log("The result is : " + text);


        });
      
    });
    it('Validate 3 + 3 = 6', () => {

//        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("3");
        element(by.buttonText("Go!")).click();
        
        element(by.binding("latest")).getText().then((text) =>{
          
            console.log("The result is : " + text);


        });
      
    });
    
});