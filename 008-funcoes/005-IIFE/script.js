// IIFE = Immedately Invoked Function Expression
// IIFE = Expressão de Função Invocada Imediatamente 


// function
(function(num1, num2){ 
    const calc = num1 + num2;
    console.log(calc)
})(1,2); //num1 , num2


// Arrow function
(() => { 
    console.log(123);
})();

(() => { 
    const teste = "teste"; //somente da pra chamar a const teste dentro do function, mesmo se fosse var
    console.log(teste)
})();