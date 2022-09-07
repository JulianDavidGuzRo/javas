'use strict';
const myArray1=['a', 'b', 'c', 'd', 'e'];
let myArray2 =new Array('a','e','i','o','u');
myArray1.push(300,677);
//let result = myArray1.concat(myArray2);
let result= [...myArray1,...myArray2];
console.log(...myArray1);
