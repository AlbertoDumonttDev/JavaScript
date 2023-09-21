// 1 - Nome da Função

function nomeFunc() {
    return "Function return => Alberto Dumontt";
}

console.log(nomeFunc());

const nomeFuncArrow = () => {
    return "Arrow Function return => Alberto Dumontt";
}

console.log(nomeFuncArrow());

// 2 - Retorno

const nomeFuncArrowReturn = () => "Caso retorno fosse em uma linha";

console.log(nomeFuncArrowReturn());

// 3 - Não tem Hoisting

console.log(nomeFuncArrowHoisting());

const nomeFuncArrowHoisting = () => {
    return "As Arrow functions não tem hoisting, logo ele dará erro na chamada de cima ^"
}

console.log(nomeFuncHoisting());

function nomeFuncHoisting() {
    return "A chama a cima irá funcionar";
}

// 4 - Arguments

const nomeFuncArrowArguments = () => {
    return arguments; // Não irá funcionar, não funciona em arrow, ira gerar um erro
}

function nomeFuncArguments() {
    return arguments; // Irá funcionar
}

console.log(nomeFuncArguments());

// 5 - Arrow não pode ser invocada com NEW

function novaFunc() {
    return 123;
}

new novaFunc();

const novaFuncArrow = () => {
    return console.log(123);
}

new novaFuncArrow(); // irá dar um erro, pois não tem construtor

// class newFunc{
//     constructor(nome){
//         this.nome = nome;
//     }
// }

// const a = new newFunc("Alberto Dumontt");

/*
   6 - Contexto

   Arrow functions possuem this léxico enquanto o modelo normal possui this dinâmcico

   Isso significa que arrow functions herdam o contexto local de onde foi declarado,
   enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado
   no momento da chamada

   Se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente
   como o contexto global, que no caso dos nagadores é window
*/

const lanches = {
    cardapio: [
        {nome: "x-salada", preco: "R$ 25,00"},
        {nome: "x-bacon", preco: "R$ 25,25"},
        {nome: "x-queijo", preco: "R$ 28,00"},
    ],

    meuPedidoFunc: function(select){  // consegue pegar o contexto fora
        return console.log(this.cardapio[select]);
    },

    meuPedidoTimeOut: function(){
        setTimeout(function(){
            console.log(this.cardapio); // não existe cardapio dentro de meuPedidoTimeOut
            console.log(this);
        }.bind(this), // .bind faz com que o this global seja trazido para dentro da function
         1000)
    },

    meuPedidoArrowFunc: (select) =>{ // não consegue sair para pegar o cardapio
        this.cardapio = [
            {nome: "x-salada", preco: "R$ 25,00"},
            {nome: "x-bacon", preco: "R$ 25,25"},
            {nome: "x-queijo", preco: "R$ 28,00"},
        ]
        return console.log(this.cardapio[select]);
    }
};

lanches.meuPedidoFunc(1);
lanches.meuPedidoArrowFunc(1);
lanches.meuPedidoTimeOut(1);



/*
   7 - Constructor
   
   Arrow functions não podem ser constructors, então não é possivel usar o operador 
   new com a mesma
 */

class newFunc{
    constructor(nome){
        this.nome = nome;
    }
}

const a = new newFunc("Alberto Dumontt");

console.log(a.nome);