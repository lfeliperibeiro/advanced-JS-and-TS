// map vai alterar os valores dos elementos do array com o mesmo tamanho do array original

const numbers = [1, 2, 5, 9, 10, 15, 20, 25, 30, 6, 7, 40, 8,  45, 50];

const dobleNumbers = numbers.map((number) => number * 2);

console.log(dobleNumbers);

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

const personName = persons.map(person => person.name)
const personObjectAge = persons.map(person => ({age: person.age}))

const person = persons.map((person, index) => {
   person.id = index + 1;
   return person
})



console.log(person);