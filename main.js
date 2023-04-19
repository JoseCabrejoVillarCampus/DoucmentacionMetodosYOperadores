//                                  Callbacks

/* Es una funcion dentro de otra funcion, esta llama a una funcion que pasa como parametro a otra */
//ejemplo1
function prueba(callback){
    callback("pedro");
}
function decirNombre(nombre){
    console.log(nombre);
}
prueba(decirNombre)
//ejemplo2
function prueba (callback){
    callback("roberto");
}
prueba(nombre => console.log(nombre))
//ejemplo3
class Persona{
    constructor(nombre, instagram){
        this.nombre=nombre;
        this.instagram=instagram;
    }
}
/* let persona= new Persona("lucas", "@lucas") *//* normalmente asi se hace la creacion de objetos */
const data=[
    ["lucas","@lucas"],
    ["vanessa","@vanessa"],
    ["pedro","@pedro"],
];

const personas =[];
for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0],data[i][1]);
} 
const obtenerPersona=(id,cb)=>{
    if (personas[id] == undefined){
        cb("No se ha encontrado la persona");
    }else{
        cb(null,personas[id])
    }
}
const obtenerInstagram=(id,cb)=>{
    if (personas[id].instagram == undefined){
        cb("No se ha encontrado la persona");
    }else{
        cb(null,personas[id].instagram)
    }
}
obtenerPersona(3,(error,persona,id)=>{
    if(error){
        console.log(error);
    }else{
        console.log(persona.nombre);
        console.log(persona.instagram(id,(err,instagram)=>{
            if(error){
                console.log(error);
            }else{
                console.log(instagram);
            }
        }));
    }
})




