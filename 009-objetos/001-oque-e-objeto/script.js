/**
    Objeto: Tenis (Propriedade) "cadarço", "palmilha"
    Objeto: Celular (Propriedade) 
    Objeto: Drone (Propriedade)

    Propriedade / Atributos / Funcionabilidades

 */

let Tenis = {
    tipo: "Tenis de corrida",
    cadarco: "G",
    estoque: false,
    tamanho: {
        palmilha: 39,
        tenis: 40,
        caixa: {
            altura: 10,
            largura: 35,
            profundidade: 40,
        },
    },
    marcaArrayValores: ["nike", "adidas", "etc ..."],
    marcaArrayObjeto: [
        {
            nome: "Nike",
        },
        {
            nome: "Adidas"
        },
        {
            nome: "etc ..."
        },
    ],

    getMarcaArrayObjeto: function (param){
        return this.marcaArrayObjeto[param].nome; //função para pegar nome
    },
    getMarcaArrayValores: function (param){
        return this.marcaArrayValores[param].nome; //função para pegar nome
    },
};

console.log(Tenis.getMarcaArrayObjeto(1));

console.log(Tenis);
console.log(Tenis.tipo);
console.log(Tenis.tamanho);

