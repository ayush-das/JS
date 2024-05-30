//Reference Types -Objects, Arrays, Functions

//Objects to group Properties eg Employee, Student

let course = {
    title: "HHLD",
    descripition: "projects",
    reting: 5
};


console.log(course);
console.log(typeof(course));

//Access Properties - 1) Using . Operator 2) Using []

console.log(course.title);
console.log(course['title']);


//Value Types vs Reference Types

//Value Types 

let x = 'Ayush';

let y = x;

x = "Test";


console.log(x);
console.log(y);


// Reference Types- q is depended on p and bot p and q point to same object in memeory

let p = { name: 'Ayush' };
let q = p;

p.name = 'Test'


console.log(p);
console.log(q);



//Arrays using indexes, Arrays can store any kind of data in JS, Arrays are also Objects

let courses = ['hld', 'lld', 'dsa', 1, true, null];

console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);
console.log(courses[3]);
console.log(courses[4]);
console.log(courses[5]);

console.log(typeof(courses));


//Functions - Code Modularity- Do one task Multiple Times we use Functions

createCourse("CN");

function createCourse(coursename) {
    console.log('Creating ' + coursename);
}

createCourse('DBMS');
createCourse('OS');
//This function will work anywhere in file- This happens because of the way that JS File Runs