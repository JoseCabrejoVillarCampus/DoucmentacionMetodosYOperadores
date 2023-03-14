//                                  ARROW FUNCTIONS


//Tambien llamadas funciones flecha o «fat arrow» son una forma corta de escribir funciones 
//que aparece en Javascript a partir de ECMAScript 6. Básicamente, se trata de reemplazar eliminar
//la palabra function y añadir => antes de abrir las llaves:
 

const hora = function () {
  return "Función tradicional.";
};

const hora1= () => {
  return "Función flecha.";
};
 // VENTAJAS:


 /* Si el cuerpo de la función sólo tiene una línea, podemos omitir las llaves ({}). */
 /* Además, en ese caso, automáticamente se hace un return de esa única línea, por lo que podemos omitir también el return. */
 /* En el caso de que la función no tenga parámetros, se indica como en el ejemplo anterior: () =>. */
 /* En el caso de que la función tenga un solo parámetro, se puede indicar simplemente el nombre del mismo: e =>. */
 /* En el caso de que la función tenga 2 ó más parámetros, se indican entre paréntesis: (a, b) =>. */
 /* Si queremos devolver un objeto, que coincide con la sintaxis de las llaves, se puede englobar con paréntesis: ({name: 'Manz'}). */


const hora2 = () => "Función flecha."; // 0 parámetros: Devuelve "Función flecha"
const hora3 = (e) => e + 1; // 1 parámetro: Devuelve el valor de e + 1
const hora4 = (a, b) => a + b; // 2 parámetros: Devuelve el valor de a + b