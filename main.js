//                                  Async/Await

/*Es la forma mas moderna de trabajar la asincronia*/

async function miFunctionAsync(){
    try{
        const resultado = await miPromesa();
    }catch(error){
        console.log(error);
    }
}
/* Usamos await para detenr la ejecucion del programa en este puinto y esperar que la promesas
se resuelva; si tiene exito retorna el valor y lo guarda en una variable, de lo contrario, lanzara
una excepcion con el error, por eso usamos try/catch */

/* la unica condicion para usar await, es que debe estar dentro de una funcion declarada con aysnc */

async function getPerrito(){
    try{
        //esperamos que la promesa resuelva y guardamos en una const
        const res = await fetch (API_URL);
        //Esperamos la sigueitne promesa y guardamos el valor
        const Json = await res,json();
        console.log(json);
    }catch(error){
        //recibe el primer error y se lanza durante le ejecucuion del try
        console.log('ocurrio un error: ${error');
    }
}
getPerrito();