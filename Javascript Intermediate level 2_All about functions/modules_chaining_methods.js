var run = (function() {
 
    var speed = '100 miles hours';
    

    var DEFALUT = {
            
        topspeed : '250 miles an hour',
        topHousePower : '507 horse power'

    };

    return {

        speed : function() {

            var allArguments = arguments[0] || '';
            var defaultArguments = allArguments.topspeed || DEFALUT.topspeed;
            console.log(defaultArguments);
            return this;
        },

        horsePower : function() {

            var allArguments = arguments[0] || '';
            var defaultArguments = allArguments.topspeed || DEFALUT.topHousePower;
            console.log(defaultArguments);
            return this;
        }

    }
})();

run.horsePower().speed();
//run.speed().horsePower();
//run.speed({topspeed:'1000 miles an hour'});