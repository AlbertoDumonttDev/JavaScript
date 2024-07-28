const pedidos = [
    {
        id: 420,
        nome: "Alberto",
        alimento: "Sanduichão de bacon",
        bebida: "Suco de limão",
    },
    {
        id: 152,
        nome: "Santos",
        alimento: "Sanduichão de quejo",
        bebida: "Suco de laranja",
    },
    {id: 30, nome: "Filho", alimento: "Misto quente", bebida: "Sprite 2L"},
    {
        id: 421,
        nome: "Dumontt",
        alimento: "X-salada",
        bebida: "Coca cola 2L",
    },
    {id: 548, nome: "Silva", alimento: "Misto quente", bebida: "Fanta 2L"},
];

/**
 *  O some pergunta se apenas 1 dos valores do Array equivale a sua condição
 */

const existeAlimento = pedidos.some((element, index) => {
    return element.alimento === "X-salada";
});

console.log(existeAlimento); // true
