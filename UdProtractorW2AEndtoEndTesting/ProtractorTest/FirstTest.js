describe("Test entering into an input box", function(){

    it("executing input box test", function(){

     browser.get("https://wwww.angularjs.org");
     element(by.model("yourName")).sendKeys("Raman");
     element(by.binding("yourName")).getText().then(function(text){
         console.log(text);

     });
   });



});