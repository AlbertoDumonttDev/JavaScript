"use strict";

const input = document.querySelector("#name");

console.log(input.innerText);

setTimeout(() => {
    input.value = "abacate";
    console.log(input.value);
}, 3000);