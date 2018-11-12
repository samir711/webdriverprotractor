var Car = function() {

    let model, year;
    return console.log(this)
}


let bmw = new Car();

bmw.model = '335I';

console.log(bmw.model);


let mercedes = new Car();

mercedes.model = 'c250';

console.log(mercedes.model)