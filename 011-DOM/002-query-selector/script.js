'use strict';

const h1 = document.querySelector("h1"); //acessando por tag
const p = document.querySelector("p"); //acessando por tag

const classP = document.querySelector(".paragrafo"); //acessando por class ex => ".class"
const idP = document.querySelector("#paragrafo"); //acessando por id ex => "#id"
const heranca = document.querySelector(".paragrafo strong"); //acessando o strong dentro da classe paragrafo
console.log(classP.querySelector("strong")); //acessando heranca direto no console

console.log(h1);
console.log(p);
console.log(classP);
console.log(idP);
console.log(heranca);


// ex de lógica
let timer = 0;
const title = document.querySelector("title");

setInterval(() => {
    title.innerText = timer;
    timer++;
}, 1000);