const myArray = [1, 2, 3, 4, 5, 6];
const myArrayObj = [
        {
            nome: "Z Dumontt"
        },
        {
            nome: "A Dumontt"
        },
        {
            nome: "W Dumontt"
        }, 
]

// for ([inicialização]; [condição]; [expressão final])

for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

for (let i = 0; i < myArrayObj.length; i++){
    console.log(myArrayObj[i]);
}

for (let i = 0; i < myArrayObj.length; i++){ //acessando objeto no array
    console.log(myArrayObj[i].nome);
}

// for of

for(let item of myArrayObj){
    console.log(item.nome)
};

for(let item of myArray){
    console.log(item)
}

// for in => Trabalhar com array de objetos

const obj = { nome: "Alberto", sobreNome: "Dumontt"};

for (let item in obj) { // acessando indice
    console.log(item);
}

for (let item in obj) { // acessando valores
    console.log(obj[item]);
}