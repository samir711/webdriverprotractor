function simpleFunction() {

    console.log("Inside Function");
}

simpleFunction();


function add(a, b) {

    // let sum = a + b;
    // console.log(sum);
    return a + b;
}

console.log(add(2, 4));

function course(){
    this.topic = "Protractor";
    this.duration = "20 Hours";
}

let obj_course = new course();

console.log(obj_course.topic + "------" + obj_course.duration);


function student(name, rollNum) {

    this.name = name;
    this.rollNum = rollNum;
}

let obj_student = new student("Samir", "700");

console.log(obj_student.name + " roll number is : " + obj_student.rollNum);