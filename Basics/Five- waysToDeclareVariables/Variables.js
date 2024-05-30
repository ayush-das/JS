//const, let, var
//const means constant Value

//const and let are more strict then var 
// let and const wont let access variables before declaration
//Hoisting Using values before declaration

let a = 10; //It is in script
const b = 20; //It is in script
var c = 20; // It is defined in global and is initially undefined

//Temporal Dead Zone we get reference error
//The temporal dead zone (TDZ) is a concept in JavaScript that refers to the period of time between the start of a scope and the moment when a variable declared with let or const is initialized. During this time, the variable is inaccessible, and attempting to access it will result in a ReferenceError.

//avoid using var use let as much as possible and use const if you dont want VALUES to change

// It is a good idea to declare all variables at top before to avoid Temporal Dead Zone and errors



//const and Let are Block Scoped and var is function scoped

// Block  {}

// {
//     let d = 10;
//     const e = 20;
//     var f = 30;
//     console.log(d);
//     console.log(e);
//     console.log(f);
// }

// // console.log(d);//error
// // console.log(e); //Error
// console.log(f);


function sum() {
    var x = 10; //Local Check if Not there then goes to outer scope // This is known as Lexical Scope
    console.log(x);
}

let x = 100;
sum(); //This creates a local context // After execution Local is deleted