const names = ['John', 'Jane', 'Mark', 'Mary',  'Bob'];

// no método splice() você pode inserir e remover elementos do array
// splice(posição, quantidade de elementos a serem removidos, elementos a serem inseridos)

names.splice(-1, 1)

// number.MAX_VALUE = 1.7976931348623157e+308
names.splice(-3, Number.MAX_VALUE)

names.splice(3, 1, 'Felipe')


names.splice(0, 1)

console.log(names);