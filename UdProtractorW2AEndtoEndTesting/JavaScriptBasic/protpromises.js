describe('Testing angular application', () => {
    
  it('Understanding promises', () => {
      browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login') ;

    element(by.css('.btn.btn-primary.btn-lg')).click();
    browser.getTitle().then((browserTitle) =>{
 
        console.log(browserTitle);
        if(browserTitle === "Protractor practice website - Banking App") {
            console.log("Title matches");
        }
        else {
            console.log("Title does not matches");
        }

    });
      

  });
 
   // console.log("Printing title");
   
});