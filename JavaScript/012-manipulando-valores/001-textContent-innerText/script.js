"use strict";

/**
 * textContent => Retorna o text COM formatações, mas sem os elementos
 * innerText => Retorna somente o texto, sem formatações ou elementos
 */


const p = document.querySelector("p");

console.log(p.textContent); // vem formatado pelo html
console.log(p.innerText); // não vem formatado

// os dois servem para alterar os textos
p.textContent = "Alberto Dumontt";
p.innerText = "Alberto Dumontt";
