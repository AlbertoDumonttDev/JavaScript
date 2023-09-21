/**
 * 
 *  shift = remove o primeiro elemento de um array e retorna esse elemento
 *  pop = remove o último elemento de um array e retorna este elemento
 * 
 */

let arr = [ 1, 2, 3, 4, 5];

console.table(arr);

// shift

arr.shift();
console.log("shift =>", arr.shift()); //remove e mostra o valor retirado
console.table(arr);
 
// pop

console.log("pop =>", arr.pop());
console.table(arr);