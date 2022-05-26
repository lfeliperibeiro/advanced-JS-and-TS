// O acumulador é o valor que vai ser utilizado para a cada iteração
// O reduce pode receber um segundo parâmetro que é o valor inicial do acumulador

const numbers = [1, 2, 5, 9, 10, 15, 20, 25, 30, 6, 7, 40, 8,  45, 50];

const totalNumbers = numbers.reduce((acc, currentValue) => {
  return acc + currentValue;
})

// console.log(totalNumbers);


const persons = [
  { name: 'Luiz', age: 20 },
  { name: 'Maria', age: 25 },
  { name: 'José', age: 78 },
  { name: 'João', age: 40 },
  { name: 'Pedro', age: 50 },
  { name: 'Eduardo', age: 38 },
  { name: 'Juliana', age: 42 },
  { name: 'Ana', age: 60 },
];

// Return the oldest person

const oldestPerson = persons.reduce((acc, currentValue) => {
  if (acc.age > currentValue.age) {
    return acc;
  } 
  return currentValue;
})

console.log(oldestPerson);