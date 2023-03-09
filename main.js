".trimEnd():Remueve los espacios en blanco solo del final del string",
".trimStart():Remueve los espacios en blanco solo del inicio del string"


// EJEMPLO 1
// Con trimEnd
let ejemplo = "HI CAMPERS       "
let print = ejemplo.trimEnd()
console.log("\nCon .trinmEnd() no se logra apreciar el tanto el cambio, para verlo realmente\ntoca ver el código js :D\n ")
console.log(ejemplo)
console.log(print)

// EJEMPLO_2 
// Con trimStart
let ejemplo2 = "           what's up nigga          "
let print2 = ejemplo2.trimStart()
console.log(ejemplo2)
console.log(print2)