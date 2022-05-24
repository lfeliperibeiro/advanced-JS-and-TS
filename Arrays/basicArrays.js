// Arrays são valores por referência, ou seja, quando você altera um valor em um array, ele altera o valor em todos os lugares que você acessou.
// Os métodos pop, shift , unshift, push, reverse e sort já são conhecidos. 

// Literal Array
const names = ['John', 'Jane', 'Mark', 'Mary',  'Bob'];

// Constructor Array
const namesNoLiterals = new Array('John', 'Jane', 'Mark', 'Mary',  'Bob');

const newNames = [...names, 'Ben'];


// -1 = último elemento
const namesSlice = names.slice(0, 3)

delete names[2];


console.log(newNames);
console.log(namesNoLiterals);
console.log(namesSlice);

const namesString = 'Fabio Henrique Souza';

// split() - transforma uma string em um array
console.log(namesString.split(' '));

// join() - transforma um array em uma string
const namesArray = ['Fabio', 'Henrique', 'Souza'];

console.log(namesArray.join(' '));
