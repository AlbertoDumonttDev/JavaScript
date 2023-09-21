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
 *  Nome bem subjetivo também, mas ele procura e te retorna 1 o primeiro valor encontrado do array.
 */


// buscando pelo ID
const findId = pedidos.find((element, index) => {
    return element.id === 30;
});

console.log(findId);