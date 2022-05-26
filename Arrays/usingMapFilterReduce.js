const numbers = [1, 2, 5, 9, 10, 15, 20, 25, 30, 6, 7, 40, 8,  45, 50];

const evenDoubleTotalNumber = numbers.filter(number =>  number % 2 === 0).map(number => number * 2).reduce((acc, currentValue) => acc + currentValue);

console.log(evenDoubleTotalNumber);