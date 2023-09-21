/*
    Precisamos mostrar quantas letrar repetitidas aparecem em uma palavra
    exp.: Abacate = { a: 3, b: 1, c: 1, t: 1, e: 1}

*/

const palavra = "Alberto Santos Dumontt da Silva Filho".toLowerCase().replaceAll(" ", ""); // toLowerCase íra deixar a palavra com todas as letra minusculas
let letras = {};

for(let i = 0; i < palavra.length; i++){

    if(letras[palavra[i]]){
        letras[palavra[i]]++;
    }else{
        letras[palavra[i]] = 1;
    }

}    

console.log(letras);