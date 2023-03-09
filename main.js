
    ".match(regex): Devuelve todas las ocurrencias de una expresión regular dentro de una cadena."


// EJEMPLO 1
//Devuelve la primera conincidencia de la palabra encontrada + su posición
let ejemplo = "Hola Soy Un Ejemplo";
let ejemplo_2 = /[A-Z]/g;
let otro = ejemplo.match(ejemplo_2);
console.log(otro);

