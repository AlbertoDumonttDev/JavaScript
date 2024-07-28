// Falsy = false, 0, "", NaN, undefined e null
// Truthy = Todos os outros diferentes do [ falsy ]

if("Dener" * 10){ //NaN
    console.log("Bom dia!");
}else{
    console.log("Boa noite!");
}

if("" ){ 
    console.log("Bom dia!");
}else{
    console.log("Boa noite!");
}

if(null){ //Null
    console.log("Bom dia!");
}else{
    console.log("Boa noite!");
}

if(!null){ //null é Falsy
    console.log("Falsy or False");
}