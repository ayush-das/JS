/*

We know Js is Single Threaded, that means it is inefficient since we have to wait for completion of task till we can take up other task

//To avoid this Blocking behaviour we have few ways in JS that can make code Non Blocking by sending the task and after it completes
we can take it up and do other tasks in the meantime


*/

// 1. Callbacks -Handling data after data is fetched

//Callback is a function that is passed as an argument to another function, It is called after some task is completed


function fetchData(callback) {

    setTimeout(() => {
        let data = "Hello world";

        callback(data, null); //error is null
    }, 5000);
}


function handleData(data, error) { //Call Back
    if (error) {
        console.error(error);
    } else {

        console.log(data);
    }

}


fetchData(handleData);

//All the callbacks are stored in Event Queue till it turn comes

//Event loop keeps checking if task is completed or not and if completed it is added to Call Stack

//Callback can be delayed if some other task is being executed



//Problems with Call Back
//Callback hell -Pyramid Structure - Pyramid of Doom

//Eg Swiggy Do one task after completeion of another task

//The code is not readable and error handling will be nightmare

//Inversion of Control --The control is depended on other function

// asyncOperation1(arg1, (result) => {
//     asyncOperation2(arg2, (result) => {

//         asyncOperation3(arg3, (result) => {

//             //And so one
//         });

//     });
// });


//To overcome this We have Promises
//Promise - Object -Eventual Completion OR FAILURE OF A Event - For Async operation

//3 STATES OF Promise = pending, fulfilled, rejected

//Promises are maintainable and readable and good at Error Handling
//Function should return a Promise object
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve('data fetched');

        }, 5000)
    })
}

// getData().then((data) => {
//         console.log(JSON.stringify(data));
//     })
//     .catch(error => { console.log(error) });


// TO get a feel of Synchronous code we use asnc and await -> It uses Promises onlu but a better way to write code

//.then and .catch can still be improved
async function fetchData() {

    try {
        const result = await getData();

        console.log(JSON.stringify(result));
    } catch (error) {
        console.error(error);
    }


}

fetchData();