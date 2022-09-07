'use strict'

const myArray1 = [2, 4, 6 ,8, true, 3.56, "maria", 800, "2"];

let myArray2 = new Array('a', 'e', 'i', 'o', 'u'); //New es para objetos



console.log(myArray1[6]);

console.log(myArray2[3]);



/**Iteracion con arreglos

For in, FOr of, Foreach

**/



for (let i of myArray1){

console.log(i);

}



for (let j in myArray2){

console.log(j);

}



myArray2.forEach(e =>{ 
    console.log(e);
});
