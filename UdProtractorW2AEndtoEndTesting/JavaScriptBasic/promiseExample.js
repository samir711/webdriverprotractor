describe('Promise Example', () => {

    let value_at_index = (index) =>
    {
        element(by.xpath('//div[4]/input['+index+']')).getAttribute('value').then((text) => {

            console.log(text +" getting the value from checkbox no : " + index);
            });

    } 

    it('Undestanding Promises Real Time', () => {
        
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.get('http://www.tizag.com/htmlT/htmlcheckboxes.php');

        for(var i=1;i<=4;i++){
            element(by.xpath('//div[4]/input['+i+']')).click();
            value_at_index(i);

        

        }        
       
        // element(by.xpath('//div[4]/input[2]')).click();
        // element(by.xpath('//div[4]/input[3]')).click();
        // element(by.xpath('//div[4]/input[4]')).click();
        browser.sleep(4000);
    });
    
});