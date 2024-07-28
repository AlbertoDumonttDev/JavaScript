const pedidos = [
    {
        id: 420,
        nome: "Alberto",
        alimento: "Sanduichão de bacon",
        bebida: "Suco de limão",
        preco: 100,
    },
    {
        id: 152,
        nome: "Santos",
        alimento: "Sanduichão de quejo",
        bebida: "Suco de laranja",
        preco: 110,
    },
    {id: 30, nome: "Filho", alimento: "Misto quente", bebida: "Sprite 2L", preco: 50,},
    {
        id: 421,
        nome: "Dumontt",
        alimento: "X-salada",
        bebida: "Coca cola 2L",
        preco: 56,
    },
    {id: 548, nome: "Silva", alimento: "Misto quente", bebida: "Fanta 2L", preco: 20,},
];

/**
 *  A ideia dele é pegar todos os valores de um Array e condensá-los em um só
 */

const balancete = pedidos.reduce((total, element) => {
    return total + element.preco;
}, 0); // a conta vai começar do R$0

console.log(`O balancete final do dia foi de R$ ${balancete}`); 
