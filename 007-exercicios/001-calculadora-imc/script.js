/*
    IMC é a sigla para índice de massa corporea,
    parametro adotado pela organização mundial
    de saude para calcular o peso ideal de cada pessoa.

    Como calcular IMC?
    O IMC é calculado dividindo o peso (em kg) pela
    altura ao quadrado (em m), de acordo com a seguinte
    fórmula: IMC = peso / (altura x altura).

    E o nosso calculo devemos retornar os seguinte valores para o usuario:

    Resultado do Calc  | Resultado para usuário
    Abaixo de 17       | Muito abaixo do peso
    Entre 17 e 18.49   | Abaixo do peso
    Entre 18.5 e 24.99 | Peso normal
    Entre 25 e 29.99   | Acima do peso
    Entre 30 e 34.99   | Obesidade I
    Entre 35 e 39.99   | Obesidade II
*/

const peso = 100;
const altura = 1.70;
const imc = Number(peso / (altura * altura)).toFixed(2); // toFixed(número de casas decimais) é uma função para diminuir as casas decimais
// console.log(imc);

switch (true) {
    case imc < 17:
        console.log("Muito abaixo do peso!");
        break;
    
    case imc >= 17 && imc <= 18.49:
        console.log("Abaixo do peso!");
        break;

    case imc >= 18.5 && imc <= 24.99:
        console.log("Peso normal!");
        break;

    case imc >= 25 && imc <= 29.99:
        console.log("Acima do peso!");
        break;

    case imc >= 30 && imc <= 34.99:
        console.log("Obesidade I!");
        break;

    case imc >= 35 && imc <= 39.99:
        console.log("Obesidade II!");
        break;

    default:
        break;
}