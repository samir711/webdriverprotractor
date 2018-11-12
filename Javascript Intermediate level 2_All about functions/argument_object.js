let add = function() {

    return arguments.length;
};

console.log(add('hello', 'world'));

let sum = function() {

    var numbersum = 0;

    for(let i=0; i < arguments.length;i++) {

        numbersum += arguments[i];
    }

    return numbersum;

}

console.log(sum(10, 20, 30, 50));