var run = (function() {
 
    var speed = '100 miles hours';

    var DEFALUT = {
            
        topspeed : '250 miles an hour'

    };

    return {

        speed : function() {

            var allArguments = arguments[0] || '';
            var defaultArguments = allArguments.topspeed || DEFALUT.topspeed;
            console.log(defaultArguments);
        }


    }




})();

run.speed();
//run.speed({topspeed:'1000 miles an hour'});