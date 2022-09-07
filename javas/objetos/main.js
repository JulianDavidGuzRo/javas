'use strict';
//objeto literal de JS
let myObject ={
    nombres : 'felix',
    apellidos: 'ruiz',
    edad: 18,
    genero: 'masculino',
}
console.log(myobject.edad),
myObject.edad= 30;
console.log(myobject);
//iterar objeto 
Object.entries(myObject).forEach((e)=> console.log(e));
Object.entries(myObject).forEach(([key])=> console.log(key,));

