//                                  FUNCIONES AUTOEJECUTABLES


//Se usan en los casos donde necesitamos crear y ejecutar una funcion sobre la marcha. solo tenemos que envolver
//en parentesis la funcion anonima.
//Tambien podemos utilizar parametros en dichas funciones.
 


(function () {
  console.log("Es la ");
})();

// Función autoejecutable con parámetros
(function (hora) {
  console.log(`¡Es la, ${hora}!`);
})("Manz");