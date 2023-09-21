console.log(soma());

function soma(){ // mesmo estando em baixo no escopo, não gera erro e funciona, as funcions são globais
    return 1 + 1;
}

var x = 10; // var é global