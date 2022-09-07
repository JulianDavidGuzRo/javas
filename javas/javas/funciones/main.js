'use strict'
//funcion clasica
function printincad(cadena){
    //template string
    console.log(`esto es una preuba de cadena${cadena}`);

}
//invocacion
printincad("estoy pasando parametro");
//funcion tipo flecha
const operacion = (num1,num2) =>{
    let result = Math.pow(num1,num2);
    return result;
}
