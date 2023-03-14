//                                  FUNCIONES CALLBACKS


//Tambien conocidas como funciones callbacks o retrollamadas, basicamente es pasar una funcion B por parametro
//a una funcion A, de esta forma la funcion A puede ejecutar a la funcion B de forma generica desde su codigo y
//se puede definir desde fuera de la funcion.


//Esto nos permite crear varias funciones a modo de callback y reutilizarlas posteriormente. 


const hora = function () {
  console.log("Es la una");
};

const tiempo = function (callback) {
  callback();
};

tiempo(hora);