//Higher order functions - Function as Parameter
//1. map -- Some opertion on all array VAlues


const nums = [1, 2, 3, 4, 5, 6];

console.log(nums);

const doubleNums = nums.map((num) => {
    return 2 * num;
});
//num is iterator

console.log(doubleNums);


//2. Filter
//Only some values



const evens = nums.filter((num) => {
    num % 2 === 0
}); //We give filter condition
//num is iterator

console.log(evens);

//3. Reduce- To one value i.e sum or multiply



const sum = nums.reduce((accumulator, num) => accumulator + num, 0);

const mult = nums.reduce((accumulator, num) => accumulator * num, 1);


console.log(sum);
console.log(mult);