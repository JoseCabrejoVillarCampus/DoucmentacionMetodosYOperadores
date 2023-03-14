//                                  FUNCIONES ANONIMAS(LAMBDA)


//Son un tipo de funcion que se declaran sin nokmbre de funcion y se alojan al interior de una variable,
//haciendo referencia a ella cada vez que queramos usarla.
//Si ejecutamos la variable, ejecutamos la funcion d¿que contien la variable, de lo contrario nos devuelve 
//la funcion en sí

//La diferencia entre funciondes declaradas y funciones por expresion, es que por expresion solo estan disponibles
//despues de la iniciacion de la variable, si la ejecutamos antes de declararlas nos dara un error. 


const hora = function () {
    return "Es la una";
  };
  
  hora; // ƒ () { return 'Es la una'; }
  hora(); // 'Es la una'