function Tenis(tamanho, estoque, preco){
    return {
        tamanho: tamanho,
        estoque: estoque,
        preco //sem precisar citar duas vezes
    }
}

console.log(Tenis(35, true, "R$ 35"));


const tamanho = 35;
const estoque = true;
const preco = "R$ 35,00";

const TenisTwo = {
    tamanho,
    estoque,
    preco
};

console.log(TenisTwo);

//metodos
const TenisTree = { 
    getTamanho(){
        return 35;
    },
};

console.log(TenisTree.getTamanho());