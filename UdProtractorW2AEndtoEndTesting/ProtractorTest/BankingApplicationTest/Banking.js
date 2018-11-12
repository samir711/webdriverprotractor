describe("Test Automation of a Banking Application", function(){

    it('validate customer login test ', () => {

        browser.driver.manage().window().maximize();
      browser.get(browser.params.url);
   // browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
     element(By.buttonText("Customer Login")).click();
     expect(browser.getTitle()).toContain('Protractor practice');
     browser.sleep(3000);
     element.all(by.css('#userSelect option')).then(function(listOfOptions) {
 
        //printing values from drop down list

         console.log('-----------printing values from drop down list----------');
         
         console.log('Total values in drop down are : ' + listOfOptions.length);

         for(let i=0; i < listOfOptions.length;i++) {
                    listOfOptions[i].getText().then(function(textValue){

                        console.log('Option Value at index : ' + i +' is : '+ textValue);
                    });

                };

        console.log('-----------printing value attribute from drop down list----------');
         for(let i=0; i < listOfOptions.length;i++) {
            listOfOptions[i].getAttribute("value").then(function(textValue){

                console.log('Option attribute at index : ' + i +' is : '+ textValue);
            });

                  }

        //  element(by.model("custId")).element(by.css("[value='2']")).click();
          element(by.model("custId")).$("[value='2']").click();
          element(by.buttonText("Login")).click();
        //   element(by.binding("user")).getText().then((text)=>{
        //    console.log(text);
        //   });

        expect(element(by.binding("user")).getText()).toEqual("Harry Potter");
          browser.sleep(3000);
        
     });
        
    });

   



});