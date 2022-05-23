// Ele faz uma lazy evaluation

function* generation() {
  yield 'Value 1';
  yield 'Value 2';
  yield 'Value 3';
}

const generator = generation();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next());

for(let value of generation1()) {
  console.log(value);
}

function* accountGenerator(){
  let accountNumber = 0;
  while(true) {
    yield accountNumber++;
  }
}

const account = accountGenerator();

console.log(account.next().value);
console.log(account.next().value);
console.log(account.next().value);
console.log(account.next().value);
console.log(account.next().value);
console.log(account.next().value);
console.log(account.next().value);


// Delegate generator

function* delegate(){
  yield 0;
  yield 1;
  yield 2;
}


function* generator(){
  yield* delegate();
  yield 3;
  yield 4;
  yield 5;
}

const generatorIterator = generator();

for(let value of generatorIterator) {
  console.log(value);
}


// Função que executa uma tarefa

function* generatorTask(){
  yield function(){
    console.log('Task 1');
  }
  yield function(){
    console.log('Task 2');
  }
}

const generatorTaskIterator = generatorTask();

const task1 = generatorTaskIterator.next().value;
const task2 = generatorTaskIterator.next().value;


task1()
task2()




