"use strict";

const h1 = document.querySelector("h1");
h1.classList.add("active" ); // add class
// h1.classList.remove("active" ); // remove a class
console.log(h1);

//toggle => se tiver classe ele aplica, se não tiver, ele remove.
h1.classList.toggle("teste2");

//verificar se a classe existe
if(h1.classList.contains("active")) {
    alert("Existe a classe active");
}

console.log(h1.classList.contains("active"));