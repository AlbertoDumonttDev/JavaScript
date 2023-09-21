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

const somenteUmPedido = [
    {
        id: 420,
        nome: "Alberto",
        alimento: "Sanduichão de bacon",
        bebida: "Suco de limão",
    }
];

/**
 *  É bacana entender que, se você tem uma condição, ela vai tratar todo seu Array,
 *  Assim podemos verificar se eles estão ok
 */


const temRefri = pedidos.every((element, index) => {
    return element.bebida === "Suco de limão";
});


const temSuco = somenteUmPedido.every((element, index) => {
    return element.bebida === "Suco de limão";
});

console.log(temRefri); // false => tem suco, mas tem mais pedidos com outras bebidas
console.log(temSuco); // true => tem somente um pedido, e ele tem suco de limão

