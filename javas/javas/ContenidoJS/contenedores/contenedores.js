'use strict';
/**
 * contenedores
 
var varl = 23; //ambito global
let var2 =12;//ambito local
const IVA_1=19;
var var1 ="hola putas";
//let var2=23
console.log(var1);
if(true){
    var var1 =false
}
console.log(var1);
*/
//suma de dos numeros
let numero1;
let numero2;
let suma;
suma=0;
numero1=parseFloat( prompt("introduzca un numero"));
numero2= prompt("introduzca un numero");
suma=numero1+parseFloat(numero2);
console.info("la suma es: "+suma)
alert("la suma es" +suma)
