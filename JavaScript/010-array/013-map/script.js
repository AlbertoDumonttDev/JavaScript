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
 *  O método MAP além de iterar todo o Array ele é muito bom para editar o iterado ( Resumindo, os dados do array )
 */

pedidos.map((element, index) => {
    if (element.id === 548 && element.alimento === "Misto quente") {
        return (element.alimento = "Kibe");
    }
});

console.log(pedidos);