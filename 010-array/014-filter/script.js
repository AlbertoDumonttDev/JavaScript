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
 *  Como o nome já diz, esse método deve ser utilizado quando temos a necessidade de filtrar nossa lista
 */

const filterSuco = pedidos.filter((element, index) => {
    return element.bebida === "Suco de laranja";
});

console.log(1, pedidos);
console.log(2, filterSuco);