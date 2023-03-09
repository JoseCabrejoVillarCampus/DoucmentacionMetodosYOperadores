//                              Operadores Aritmeticos de la libreria math


//                                           => Math.PI

//La propiedad Math.PI representa la relacion entre la longitud de la circunferencia de un circulo y su diametro, 
//la cual es aproximadamente 3.14159. 
//Debido a que PI es una propiedad estatica del modulo Math, siempre debes de utilizarla como Math.PI, en lugar 
//de una propiedad de un objeto Math que tu hayas creado ( Math no es un constructor ).

function calculaCircunferencia(radio) {
    return 2 * Math.PI * radio;
  }
  
  calculaCircunferencia(1);  // 6.283185307179586
  
  
  
  //                                            => Math.max()
  
  //La función Math.max() retorna el mayor de cero o más números dados como parámetros de entrada, o NaN si cualquier 
  //parámetro no es un número y no puede ser convertido en uno.
  //Como max() es un método estático de Math, siempre se usa como Math.max(), en lugar de como un método de un objeto 
  //Math creado (Math no es un constructor).
  //Si no se proveen argumentos, el resultado es -Infinity.
  //Si al menos uno de los argumentos no puede ser convertido a número, el resultado es NaN. 
  
  Math.max(10, 20);   //  20
  Math.max(-10, -20); // -10
  Math.max(-10, 20);  //  20
  
  
  //                                            => Math.min()
  
  //Ya que min() es un método estático de Math, siempre debe usarse como Math.min(), en lugar de como un método de un 
  //objeto Math instanciado (Math no es un constructor).
  //Si no se proporcionan argumentos, el resultado es Infinity.
  //Si al menos uno de los argumentos no puede ser convertido a número, el resultado es NaN.
  
  var x = 10, y = -20;
  var z = Math.min(x, y);
  
  //                                            => Math.pow()
  
  //La función Math.pow() devuelve la base elevada al exponente , esto es, baseexponente.
  //La función Math.pow() retorna la base elevada al exponente, es decir, baseexponente. La base y el exponente estan en el 
  //sistema numérico decimal.
  //Puesto que pow() es un método estático de Math, siempre se utiliza como Math.pow(). Si la base es negativa y el exponente 
  //no es un número entero, el resultado será NaN.
  
  // simple
  
  Math.pow(7, 3);    // 343
  
  // exponentes fraccionales
  
  Math.pow(2, 1/3);  // 1.2599210498948732 (raíz cúbica de 2)
  
  // exponentes con signo
  
  Math.pow(7, -2);   // 0.02040816326530612 (1/49)
  
  // bases con signo
  
  Math.pow(-7, 3);   // -343 (El cubo de una base negativa puede ser negativo)
  
  
  //                                              => Math.random()
  
  //La función Math.random() devuelve un número de coma flotante pseudo-aleatorio, comprendido en el rango de 0 a menor que 1 
  //(es decir, incluido el 0 pero no el 1), con una distribución aproximadamente uniforme en este rango. Dicho rango puede ser 
  //ampliado hasta los valores deseados. La implementación selecciona la semilla inicial del algoritmo de generación de números 
  //aleatorios, no pudiendo ser esta elegida o restablecida por el usuario. 
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // Salida: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // Salida: 0
  
  console.log(Math.random());
  // Salida: un numero de  0 a <1
  
  //                                              => Math.sqrt()
  
  //La función Math.sqrt() retorna la raíz cuadrada de un número, que es
  //x ≥ 0 , M a t h . s q r t ( x ) = x = the unique y ≥ 0 such that y 2 = x 
  
  Math.sqrt(9); // 3
  
  //                                              => Math.ceil()
  
  //La función Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
  
  console.log(Math.ceil(.95));
  // Expected output: 1
  
  console.log(Math.ceil(4));
  // Expected output: 4
  
  //                                              => Math.floor()
  
  
  //Devuelve el máximo entero menor o igual a un número.
  
  function getFloor(x) {
     return Math.floor(x);
  }
  
  //Si se pasa 45.95 a getFloor, éste devuelve 45; si se le pasa -45.95, devuelve -46.
  
  //                                             => Math.round()
  
  //La función Math.round()retorna el valor de un número redondeado al entero más cercano.
  
  // Retorna el valor 20
  x = Math.round(20.49);
  
  // Retorna el valor 21
  x = Math.round(20.5);
  
  //                                              => Math.trunc()
  
  //La función Math.trunc() devuelve la parte entera de un numero removiendo cualquier dígito decimal 
  //(dígitos situados después de la coma).
  //A diferencia de los otros tres métodos de Math: Math.floor(), Math.ceil() y Math.round(), la forma en que Math.trunc() 
  //funciona es muy simple. trunca (corta) el punto y los dígitos a la derecha de él, sin importar si el argumento es un 
  //número positivo o negativo.
  //Si el argumento es un número positivo, Math.trunc() es equivalente a Math.floor(); de otra forma Math.trunc() es 
  //equivalente a Math.ceil().
  //El argumento pasado a este método será convertido a un tipo numérico entero.
  
  Math.trunc(13.37);    // 13
  Math.trunc('-1.123'); // -1
  
  //                                              => Array.prototype.findIndex()
  
  //El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. 
  //En caso contrario devuelve -1.
  
  function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start < 1) {
        return false;
      } else {
        start++;
      }
    }
    return element > 1;
  }
  
  console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, no encontrado
  console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
  
  //                                                => toFixed()
  
  //El método toFixed() formatea un número usando notación de punto fijo.
  
  function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }
  
  console.log(financial(123.456));
  // Expected output: "123.46"
  
  console.log(financial(0.004));
  // Expected output: "0.00"
  
  console.log(financial('1.23e+5'));
  // Expected output: "123000.00"
  