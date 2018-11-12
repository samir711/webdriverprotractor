// var courses = ['selenium', 'Protractor', 'Appium',"JMeter"];
let courses = new Array('selenium', 'Protractor', 'Appium',"JMeter");
console.log(courses[1]);
console.log(courses.length);

for(let course in courses) {
    console.log(courses[course]);
}