// filter vai retornar um novo array com os elementos que passaram no teste

const numbers = [1, 2,5, 9, 10, 15, 20, 25, 30, 6, 7, 40, 8,  45, 50, 55, 60, 65, 70, 75, , 95, 100];

// método filter recebe um valor, index e array como parâmetro
const numbersFiltered = numbers.filter((numbers) => numbers > 20)

console.log(numbersFiltered);

const persons = [
    { name: 'Luiz', age: 20 },
    { name: 'Maria', age: 25 },
    { name: 'José', age: 30 },
    { name: 'João', age: 40 },
    { name: 'Pedro', age: 50 },
    { name: 'Eduardo', age: 38 },
    { name: 'Juliana', age: 42 },
    { name: 'Ana', age: 60 },
];

const personsFilteredAge = persons.filter((person) => person.age > 40);
const personsFilteredWordLength = persons.filter((person) => person.name.length >= 5);
const personsFilteredLastWord = persons.filter((person) => person.name.toLowerCase().endsWith('a')) ;


console.log(personsFilteredLastWord);