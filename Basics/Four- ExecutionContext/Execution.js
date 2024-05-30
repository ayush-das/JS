//Execution Context

/*
1. Memory Phase - Variable environment
2. Code Phase - Thread Of Execution - Line by Line Execution

This is known as hoisting- Accessing Values before declaration

*/
// Js is single threaded
greet();
console.log(a); //Variables are created in Memory Phase and Values are assigned in code phase

function greet() {
    console.log("Hello World");
}

var a = 10;


greet();
console.log(a);


//this, window refers to global Object - they are same thing
//console.log(this.a);
//console.log(window.a);