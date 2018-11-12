function parentProcess() {
 
    var speed = '100 miles an hour';

    function childProcess() {
     
      //  var speed = '200 miles an hour';

        console.log('This car runs at ' + speed);

    }
   
    childProcess();


}

parentProcess();