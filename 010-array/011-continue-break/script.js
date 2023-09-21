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
    {
        nome: "Santos 1",
        sobreNome: "Filho"
    },
    {
        nome: "Santos 2",
        sobreNome: "Filho"
    },
    {
        nome: "Santos 3",
        sobreNome: "Filho"
    },
];

for (let item of myArrayObj) {

    if (item.nome === "Dumontt") {
        console.log("Encontrei");
        continue; // para mas continua
    }
    
    if (item.nome === "Santos 1") {
        console.log("Encontrei José");
        break; // encerra o loopping
    }

    console.log(item);
}