//                                  Object.fromEntries()


//El método Object.fromEntries() toma una lista de pares clave-valor y devuelve un nuevo objeto cuyas propiedades 
//vienen dadas por esas entradas. Se espera que el argumento iterable sea un objeto que implemente un método @iterator. 
//El método devuelve un objeto iterador que produce objetos tipo array de dos elementos. El primer elemento es un valor 
//que se utilizará como clave de propiedad, y el segundo elemento es el valor que se asociará a esa clave de propiedad.
//Object.fromEntries() realiza la operación inversa a Object.entries(), salvo que Object.entries() sólo devuelve propiedades 
//con clave de cadena, mientras que Object.fromEntries() también puede crear propiedades con clave de símbolo.


 
//Convertir un mapa en objeto


const map = new Map([
  ["nombre", "jose"],
  ["edad", 30],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { nombre: "jose", edad: 30 }

//Convertir un array en objeto

const arr = [
  ["nombre", "jose "],
  ["edad", "30"],
  ["sexo", "M"],
];
const obj1 = Object.fromEntries(arr);
console.log(obj1); // { nombre: "jose", edad: 30, sexo: "M" }


//Con Object.fromEntries, que es un metodo reverso de  Object.entries(), y metodos de manipulaciond de arrays:

const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]),
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
