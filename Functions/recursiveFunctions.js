// Funções recursivas são funções que chamam a si mesmas.

function recursiveFunction(max){
  console.log(max);
  if(max >= 10) return;
  max++;
  recursiveFunction(max);
}

recursiveFunction(0)