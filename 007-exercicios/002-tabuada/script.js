/*
    Precisamos mostrar a tabuado no console de 0 até 10 neste seguinte formato:

    multiplicado x número = resultado
    multiplicado x 0 = resultado
    multiplicado x 1 = resultado
    multiplicado x 2 = resultado
    multiplicado x 3 = resultado
    ...
    multiplicado x 10 = resultado

    obs.: Não podemos criar varios console.log
*/

const multiplicador = 7;

for(let i = 0; i <= 10; i++){
    const calc = multiplicador * i;
    console.log(`${multiplicador} x ${i} = ${calc}`);
}