// Constructor functions use new to create objects.
// O new cria um novo objeto. e o this aponta para o objeto criado.
// Ele retorna implicitamente o objeto criado. 
// Variáveis que são criadas dentro da função são privadas.
// O this.name por exemplo é um atributo.


function Person(name, lastName){
  this.name = name;
  this.lastName = lastName;

  this.method = function(){
    console.log(`${this.name} call the method`);
  }
  }

  

const person = new Person('John', 'Doe');

console.log(person.name);

person.method()
