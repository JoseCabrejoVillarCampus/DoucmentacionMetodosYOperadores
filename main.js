
".matchAll(regex) :Retorna un interador de todos los resultados que coinciden con una cadena de una expresión regular, incluyendo grupos capurados"


   
// EJEMPLOS
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]