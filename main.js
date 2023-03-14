//                                  CLAUSURAS


//Tambien llamadas cierres, son funciones que encierran variables en su propio ambito.
//En el interior de la funcion autoejecutable, creamos una variable que se guardara en
//el ambito de dicha funcion.
 


const incr = (function () {
  let num = 0;//variable almacenada dentro de la funcion
  return function () {
    num++;
    return num;
  };
})();

typeof incr; // 'function'
incr(); // 1
incr(); // 2
incr(); // 3