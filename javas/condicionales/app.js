'use strict';
let num3=55;
let num4=10;
if(num3>num4){
    console.log ("entre");
}else{
    if(num3%5==0){
        console.log("multiplo de 5");
    }
}
//condicional ternario
let respuesta=(num4>=100)?"num4 es mayor que 10": "no es mayor que 10";
console.log(respuesta);
//switch
let opcion=3;
switch(opcion){
    case 1:     
     console.log("opcion 1");
     break;
    case 2:     
     console.log("opcion 2");
     break;
    case 3:     
     console.log("opcion 3");
     break;
    case 4:     
     console.log("opcion 4");
     break;
    default:
        console.log("fuera de rango")
}
switch(true){
    case opcion>=0 && opcion<3:     
     console.log("esta aplazado");
     break;
    case opcion>=3 && opcion<=5:     
     console.log("aprobado");
     break;
    case opcion>5:     
        console.log("fuera de rango");
     break;
}
