//                                  Promesas

/*Las promesas son una nueva forma de realizar acciones asincronicas dentro de javaScript 

Con las promesas de JavaScript hacemos esto usando una función callback (gestores de promesas). 
Estas funciones están definidas en el método anidadothen().
Para especificar que callbacks usar, usa las siguientes funciones:

    resolve(value): Esta indica que la tarea asincrónica se realizó correctamente. Esto ejecutará 
    el callback de cumplimiento en el controlador then().
    reject(error): Esta indica un error mientras se intenta realizar la tarea asincrónica. Esta 
    ejecutará el callback de error en el controlador  then().
Si la promesa se cumple, el callback de cumplimiento se ejecutará, de lo contrario se ejecuta el 
callback de error.
Una promesa es un simple texto provisional para una tarea asincrónica que aún no se ha completado. 
Cuando defines una promesa en tu script, en vez de devolver un valor inmediatamente, esta devuelve una promesa. */


// Se crean de la sigueinte forma:

const doAsyncStuffWithPromises =(num1, num2)=>{
    const resultado = num1 + num2
    return new promises (resolve =>{
        setTimeout(()=>{
            resolve(resultado)
        },500)
    }) 
}

//luego

new Promise ((resolve, reject)=>{
    try{
        resolve('la promesa fue exitosa');
    }catch (error){
        reject(error);
    }
});

/* Esta resive 2 parametros (resolve, reject), que se ejecutaran en caso de exito o error, tambien 
se le pueden pasar argumentos a estos parametros.
luego usamos el metodo then para realizar una accion cuando una promeasa se resuelva, de caso contrario 
uisamos catch para tomar el error y resolverlo correctamente*/

miPromesa()
    .then((value)=>console.log('exito ${value}'))
    .catch((value)=>console.log('fallo ${error}'))

/* Ahora usaremos fetch (API nueva del navregafdor) para realizar peticiones HTTP que utiliza proesas */

fetch (API_URL)
    .then((res)=>res.json())
    .then((json)=>console.log(json))
    .catch((error)=>console.log('fallo ${error}'))

/* Podemos encadenar los then (promesas) que queramos, pero catch no necesita duplicarce, este atrapa
cualquier error que surja de las promesas*/
/* Transformamos una funcion callbacck a una promesa de la siguiente manera: */

function cargarArchivoCallBack(file,callback){
    const reader = new FileReader();
    reader.addEventListener('load',callback);
    reader.readAsDataURL(file);
}

function cargarArchivoPromesa(file){
    return new promise ((resolve,reject)=>{
        try{
            //logica que se usara
            //llamamos la funcion resolve
            const reader = new FileReader();
            reader.addEventListener('loas',resolve);
            reader.readAsDataURL(file),
        }catch(error){
            reject(error);
        }
    })
}
cargarArchivoCallBack(file,(e)=>{
    Image.src= e.target.result;
})
cargarArchivoPromesa (file).then((e)=>{
    Image.src=e.target.result;
})