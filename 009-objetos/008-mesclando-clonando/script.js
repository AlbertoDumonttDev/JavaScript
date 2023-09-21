let Tenis = {
    tamanho: 45,
    estoque: true,
};

let link = { link: { a: "a", b: { c: "c"} } };

//clonagem simples
let clone1 = Tenis;
console.log(clone1);

//Mesclando usando assing(primeiroObjeto, segundoObjeto)
let mesclar1 = Object.assign(Tenis, link)
console.log(mesclar1);

let mesclar2 = { ...Tenis, ...link };
// let mesclar2 = { ...Tenis, link }; sem os tre pontinhos ele não imprimi "link: { ..."
console.log(mesclar2);