describe('Validating the calculator ap', () => {

    let titleText;

    beforeEach(() => {

       browser.get("http://www.way2automation.com/angularjs-protractor/calc/");

           
       
       browser.getTitle().then((text) =>{
          titleText = text;
          
       });       



    });
 

    it('Validate exact title', () => {
       
        expect(titleText).toEqual("Protractor practice website - Calculator");
    });

    it('Validate title should not match ', () => {
        
        expect(titleText).not.toEqual("Protractor practice website - Calculator 1");
    });

    it('Validate partial title match ', () => {
        
        expect(titleText).toMatch("practice");
    });
    

});