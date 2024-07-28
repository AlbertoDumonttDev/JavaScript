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

//desestruturando
const { tamanho, estouque, marcas = "Não possui marcas alguma "} = Tenis;
console.log(tamanho, estouque, marcas);

//desestruturando e aplicando alias
const { secret: randomNumber } = Tenis; 
console.log(randomNumber);
// console.log(secret); //vai gerar erro, pois foi renomeado


//Next
const { link} = Tenis;
console.log(link);

const { link: { a }} = Tenis;
console.log(a);

// const { link: a, { b: { c } }} = Tenis;
console.log(c);

Tenis.link.a;
Tenis.link.a.b;
Tenis.link.a.b.c;


// const TenisTwo = {
//     tamanho: 45,
//     estoque: true,
// };

// const { tamanho, marcas = "Não possui marcas alguma" } = Tenis; nessa parte , como não tem marca no TenisTwo, ele irá imprmir a mensagem "Não possui marcas alguma" 