'use strict';
//Seleccionar elementos del DOm
let myTitle = document.getElementById('titulo');
//Seleccionar por el name
//Seleccion por etiqueta 
let etiqueta = document.getElementsByTagName("h3"); 
console.log(etiqueta);
//QuerySelector
let queryTitulo = document.querySelector("#container")
//Query selector por class
let myMenu = document.querySelector(".menu"); 
//Query Selector de etiqueta
let myOl = document.querySelector("ol")
console.log(myOl);
miParrafo.id="parrafo"; 
miParrafo.className="parrafo"; 
miParrafo.textContent="Lorem ipsum dolor sit amet, consectetur adip     incididunt. Cum sociis natoque penatibus etiqueta   consequ";
miParrafo.innerHTML=miParrafo.innerHTML="Lorem ipsum dolor sit amet, consectetur adip     incididunt. Cum sociis natoque penatibus etiqueta   consequ";
//Insertar elemento del DOM
document.body.appendChild(miParrafo);
