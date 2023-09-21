/*
    Janeiro
    Fevereiro
    Março
    Abril
    Maio
    Junho
    Julho
    Agosto
    Setembro
    Outubro
    Novembro
    Dezembro
*/

const mes = 5;

switch (mes) { //condição
    case "comparar string": //vai ser comparado
        console.log("Janeiro");
        break; //para para se achar o certo
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    default: //caso não encontre o valor
        console.log("Mês não encontrado");
        break;
}

// if(mes === 1) {
//     console.log("Janeiro");
// }else if(mes === 2){
//     console.log("Fevereiro");
// } ...