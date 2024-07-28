"use strict";

/**
 * innerHTML => Retorna o texto, COM formatações e COM elementos HTML
 * createElement => Cria um elemento HTML
 */


// innerHTML

const div = document.querySelector("div");
console.log(1, div);

div.innerHTML = "<strong>Esse é meu novo texto</strong>"; // irá substituir

//formas de concactenar
div.innerHTML += "<strong>concactenar</strong>";
div.innerHTML = `${div.innerHTML} <strong>concactenar</strong>`;

console.log(2, div);


// createElement

const elementUl = document.createElement("ul");

[1, 2, 3, 4].forEach((element) => { //adicionando elemento dentro do elemento UL
    const elementLi = document.createElement("li");
    elementLi.innerText = element;
    elementUl.appendChild(elementLi); // appendChild => adicionando filho
})

div.appendChild(elementUl);

console.log(elementUl);