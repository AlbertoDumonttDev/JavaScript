/*

    objeto: Tenis (propriedade) "cadarço", "palmilha"
    objeto: Celular (propriedade) 
    objeto: Drone (propriedade) 

    Propriedades  /  Atributos  /  Funcionabilidades


*/ 


console.log(
    {
        tenis: ["cadarço", "palmilha"] , //array
        celular: 11970578775 , //number
        Drone: "bateria" , //string
        verdade: true , //boolean
        quarto: { //objeto dentro do objeto
            cama: "travesseiro" ,
            lampada: "Luz"
        }
    }
)

console.log([
    {
        tenis: {
            preco: 150,
            disponivel: true,
            estoque: 150,
            cadarco: {
                cor: "rosa",
                tamanho: "G",
            },
            palmilha: {
                tamanho: 43,
                cor: "roxo"
            }
        },
    },
])