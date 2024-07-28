/**
 * 
 *  slice = pega os dados dentro de um range sem quebrar o array
 *  splice = remove os dados do array dentro de um range
 * 
 */

let arr = [
    { nome: "Alberto", tel: "(99) 99999 9999"},
    { nome: "Santos", tel: "(99) 99999 9999"},
    { nome: "Dumontt", tel: "(99) 99999 9999"},
    { nome: "Filho", tel: "(99) 99999 9999"},
];

console.table(arr);

// slice => faz somente a cópia com nova alterações, ele não altera o array

const newArraySlice = arr.slice(0, 3); // vai mostra do indice 0 ao 3

console.table(newArraySlice);

// splice => faz a remoção, ele altera o array

const newArraySplice = arr.splice(0, 2);

console.table(newArraySplice);

