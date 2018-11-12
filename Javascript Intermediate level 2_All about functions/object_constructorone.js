function Car() {

    let model, year, runs;
    this.model = "335i";
    this.runs = function() {
           console.log("This car run very fast")
    }

}
 

let bmw = new Car();

 console.log(bmw.runs());
 console.log(bmw.model);


// let mercedes = new Car();

// mercedes.model = 'c250';

// console.log(mercedes.model)