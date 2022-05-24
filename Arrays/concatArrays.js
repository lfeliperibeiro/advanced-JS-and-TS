const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const concatArraysSpread = [...num1, ...num2];

const concatArrays = num1.concat(num2);
const concatArraysMoreItems = num1.concat(num2, [7, 8, 9]);


console.log(concatArraysSpread);