const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [
        {
            nome: "Nike"
        },
        {
            nome: "Adidas"
        },
    ],
    secret: 112345,
    n: 5,
    link: { a: "a", b: { c: "C"}},
};

// hasOwnProperty | propertyName in Tenis


// hasOwnProperty
console.log(Tenis.hasOwnProperty("teste")); // false
console.log(Tenis.hasOwnProperty("tamanho")); // true

if (Tenis.hasOwnProperty("tamanho")) {
    console.log("Existe tamanho");
} else {
    console.log(" Não existe tamanho");
}


// propertyName in Tenis
console.log("tamanho" in Tenis); // true
console.log("teste" in Tenis); // false