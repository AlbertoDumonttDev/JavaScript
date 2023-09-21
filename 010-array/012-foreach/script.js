const myArrayObj = [
    {
        nome: "Alberto",
        sobreNome: "Filho"
    },
    {
        nome: "Santos",
        sobreNome: "Filho"
    },
    {
        nome: "Dumontt",
        sobreNome: "Filho"
    },
];

myArrayObj.forEach((item, index) => { // traz o index
    console.log(index, item.nome);
});

myArrayObj.forEach((item, index) => { // acessa o objeto
    console.log(index, item.nome);
});

myArrayObj.forEach((item, index) => { // com if
    if (item.nome === "Santos") {
        return console.log("Encontrei");
    }
    console.log(index, item.nome);
});

myArrayObj.forEach(item => {
    console.log(item);
});