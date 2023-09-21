function soma (num1, num2) {
    if(typeof num1 === "number" && typeof num2 === "number"){ // validando type dos argumentos passados
        return num1 + num2;
    }
        return "Você passou dados invalidos!";
}


console.log(soma("1",5)); // Passando argumentos


function subtracao () {
    return arguments; // irá retornar os argumentos passados, não da pra usar em arrow functions
}

console.log(subtracao("abc", 1, 3));

// retorna => [Arguments] { '0': 'abc', '1': 1, '2': 3 } 

const isValidation = (num1 = NaN, num2 = NaN) => { // caso não seja passado argumentos o NaN assume
    if(typeof num1 === "number" && typeof num2 === "number"){ // validando type dos argumentos passados
        return num1 + num2;
    }
        return "Você passou dados invalidos!";
}

console.log(isValidation());
