
//construindo objeto
const Tenis = {
    tamanho: 45,
    marca: "Nike",
};

//acessando valores
console.log(Tenis.marca);
console.log(Tenis.tamanho);
console.log(Tenis["tamanho"]);

//verificando tipo
console.log(typeof Tenis.tamanho);

//somando valores
console.log(Tenis.tamanho + 5);

//concatenando
console.log("Marca " + Tenis.marca + " é muito boa");
console.log(`Marca ${Tenis.marca} é muito boa`);
