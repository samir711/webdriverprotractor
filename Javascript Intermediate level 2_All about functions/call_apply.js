let run  = function(speed) {

 console.log("This is the speed :" + speed);
 console.log(this)

}

var speedUpgrade = {
    firstSpeed  : '50 more miles per hour',
    secondSpeed : '200 miles an hour'
};

//run.call(speedUpgrade,speedUpgrade.secondSpeed)
run.apply(speedUpgrade,['5000 miles an hour'])
//run('100 miles an hour');