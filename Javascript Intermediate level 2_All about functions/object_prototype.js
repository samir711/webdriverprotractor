function speed(miles) {

    console.log(miles)
}




function Car(model,year) {

   this.model = model;
   this.year = year;
    }

 Car.prototype.speed = speed

let bmw = new Car("335i",2309);

 console.log(bmw.year);
 console.log(bmw.model);
 bmw.speed('100');


// let mercedes = new Car();

// mercedes.model = 'c250';

// console.log(mercedes.model)