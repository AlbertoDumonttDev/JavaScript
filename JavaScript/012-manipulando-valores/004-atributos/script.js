"use strict";

const div = document.querySelector("div");


//adiocnando atributos
div.setAttribute("id", "teste");
div.setAttribute("class", "active");
div.setAttribute("class", "background-red");


//removendo
div.removeAttribute("id");
console.log(div);