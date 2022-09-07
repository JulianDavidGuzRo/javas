'use strict';
let cadena = "enero-febrero-marzo-abril-mayo-junio-julio" ;
const myArray1 = [2, 4, 6 ,8, true, 3.56, "maria", 800, "2"];
//metodo split
let resultarray=cadena.split('-');
console.log(resultarray);
//metodo find
let result= myArray1.find((e)=>e===true);