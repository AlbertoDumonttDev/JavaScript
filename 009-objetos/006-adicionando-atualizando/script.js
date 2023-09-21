//somente é possivel com let
let Tenis = {
    tamanho: 45,
    estoque: true,
}

//mudando valores
Tenis.tamanho = 42;
Tenis.estoque = false;

//adicionando valores
Tenis.preco = "R$ 42,00";
//Tenis["preco"] = "R$ 42,00";

console.log(Tenis);