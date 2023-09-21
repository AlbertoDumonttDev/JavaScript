const velocidade = 75;
const warn = 85;

//condição ? true : false
// ? -> True
// : -> False

const condicao = velocidade >= warn ? console.log("Recebeu uma Multa!") : console.log("Continua andando!");

if(velocidade >= warn){
    console.log("Recebeu uma Multa!")
}