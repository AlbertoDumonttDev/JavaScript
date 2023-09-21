// var - Ele é utilizado globalmente
var cachorro = "Kyara";
console.log(cachorro);

cachorro = "Teca"; //alterando valor da variavel
console.log(cachorro);


// let - Ele é gerado dentro do escopo
let lanche = "bolovo";
let bolso = {celular: "iphone", fone: "airpod"}
console.log(lanche);

lanche = "Misto quente"; //alterando valor da variavel
console.log(lanche);


// const - Ele é gerado dentro de um escopo porém não conseguimos alterar os valores dentro dele
const nome = "Alberto";
console.log(nome);

// nome = "Silva" // VAI GERAR UM ERRO, POIS NÃO PODE SER MUDADO

// nome = "Silva" // VAI GERAR UM ERRO, POIS NÃO PODE SER MUDADO
//      ^

// TypeError: Assignment to constant variable. <<<<
//     at Object.<anonymous> (C:\Javascript\Curso Java Script\005-variaveis\001-entendendo-variaveis\script.js:22:6)
//     at Module._compile (node:internal/modules/cjs/loader:1233:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1287:10)
//     at Module.load (node:internal/modules/cjs/loader:1091:32)
//     at Module._load (node:internal/modules/cjs/loader:938:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47