// Ordenar STRINGS
const stringArray = ["A", "C", "B", "D", "W", "L", "P"];

console.log(stringArray.sort()); // ordernar em ordem alfabética, sort foi feito para STRING
console.log(stringArray.reverse()); // ordernar de trás para frente

// Ordenar NÚMBERS

/**
 *  sort( (a, b) => a - b)
 *  Se retornar um valor negativo, o valor de "a" será ordenado antes de "b".
 *  Se retornar 0, a ordenação de "a" e "b" não mudará.
 *  Se retornar um valor positivo, o valor em "b" será ordenado antes de "a".
 */

const numberArray = [5, 1, 0, 2, 150, 100, 24];

console.log(numberArray.sort( (a, b) => a - b)); // ordernar na forma crescente
console.log(numberArray.sort( (a, b) => b - a)); // ordernar na forma decrescente
console.log(numberArray.sort( (a, b) => a - b).reverse()); // ordernar na forma decrescente

// Ordenar OBJETOS
const objArray = [
    {
        nome: "Z Dumontt"
    },
    {
        nome: "A Dumontt"
    },
    {
        nome: "W Dumontt"
    },
    {
        nome: "B Dumontt"
    },
    {
        nome: "N Dumontt"
    },
];

console.log(objArray.sort((a,b) => a.nome.localeCompare(b.nome))); // ordenar em ordem alfabética
console.log(objArray.sort((a,b) => a.nome.localeCompare(b.nome)).reverse()); // ordenar fora ordem alfabética