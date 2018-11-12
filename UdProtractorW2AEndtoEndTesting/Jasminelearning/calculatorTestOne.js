describe('Validating the calculator ap', () => {

    let expectedText;

    beforeEach(() => {

       browser.get("http://www.way2automation.com/angularjs-protractor/calc/");

       element(by.model("first")).sendKeys("7");
       element(by.model("second")).sendKeys("7");
       element(by.buttonText("Go!")).click();
       
       element(by.binding("latest")).getText().then((text) =>{
          expectedText = parseInt(text);
          
       });       



    });
    
    afterEach(() => {
        browser.sleep(3000);
        console.log("after it block");

    });

    it('Validate 7+ 7 = 14', () => {

        expect(expectedText).toBe(14);

    });
    it('Validate 7 + 7 != 10', () => {

        expect(expectedText).not.toBe(10);
      
    });


    it('Validate 7 + 7 = 13', () => {

        expect(expectedText).toBe(13);
      
    });
    

});