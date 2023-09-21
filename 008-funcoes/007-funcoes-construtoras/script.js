function Name(){
    this.name = "Alberto";
}

function Sobrenome(sobrenome, ultimonome){
    this.sobrenome = sobrenome;
    this.ultimoNome = () => {
        const nomeCompleto = `${this.sobrenome} ${ultimonome}`;
        return nomeCompleto;
    }
}

const alberto = new Name();
const dumontt = new Sobrenome("Dumontt");
const completo = new Sobrenome("Santos", "Dumontt")

console.log(alberto);
console.log(alberto.name); //acesando direto o name

console.log(dumontt.sobrenome); //acesando direto o name
console.log(completo.ultimoNome()); //acesando direto o name


function Calculadora (num1, num2) {
    this.soma = () => {
        return `${num1 + num2}`;
    }

    this.subtracao = () => {
        return `${num1 - num2}`;
    }
}


const caluladora = new Calculadora(1,2);

console.log(caluladora.soma());
console.log(caluladora.subtracao());