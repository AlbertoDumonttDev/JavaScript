"use strict";
//encontrar o pai do elemento

const strong = document.querySelector("strong");
const p = document.querySelector(".paragrafo");

console.log(strong.parentElement); // => retorna um documento
console.log(strong.parentNode); // => não retorna um documento

console.log(p.parentElement); // => retorna um documento
console.log(p.parentNode); // => não retorna um documento


console.log(document.documentElement.parentElement === document); // false
console.log(document.documentElement.parentNode === document); // true