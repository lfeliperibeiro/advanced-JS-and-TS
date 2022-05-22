function returnFunction(name){
  return function(){
    return name
  }
}

const myFunction = returnFunction('JOhn');
const myFunction2 = returnFunction('Felipe');


console.log(myFunction());
console.log(myFunction2());

