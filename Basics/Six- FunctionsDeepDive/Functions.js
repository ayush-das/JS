// Functions are known as First-Class Citizens in JavaScript as they are very important

//Functions in JS can be assigned to variables, They can be passed as arguments to different functions, They can be returned from functions, They can be stored in Data Structures

//Memory allocated in Function Global Scope
function sum(a, b) {
    return a + b;
}

// console.log(sum);
// console.log(sum(2, 3));



//Store in a Variable
//Memory allocated for Variable Outside global since let
//Var variable inside global
//Inside Local a,b and Reference to outside Window
let add = function(a, b) {
    return a + b;
}


// console.log(add);
// console.log(add(2, 3));

function diff(a, b) {
    return a - b;
}

//Function as Parameter

function operate(method, a, b) {
    return method(a, b);
}

console.log(operate(sum, 10, 20));

console.log(operate(diff, 10, 20));


//Higher Order Functions - are Functions that takes one or moew functions as arguments or return function as its result


//Arrow Functions - Another way to write a function

let sum1 = (a, b) => a + b;

let sum2 = (a, b) => {
    return a + b;
}

console.log(sum1(2, 3));
console.log(sum2(8, 9));


// Returning a function
let a = 10;

function outer() {
    a = 100;

    function inner() {
        console.log("Hello World!", a);
    }

    return inner;
}


let returnedFunctionVar = outer(); //Stores inner function
a = 20; //Reference Values inside function -- Closure
console.log(returnedFunctionVar);

returnedFunctionVar(); //inner Function executes 
//The Value of a is getting updated even outside, Function this is closure

//Function + Lexical Scope = Closure

//To many closures can take up lot of memory and cause Memory Leaks
//Don't use too many closures