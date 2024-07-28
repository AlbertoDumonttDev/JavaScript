// Spread Operator => ...

const num = [ 1, 2, 3, 4, 5];

console.log(num); // imprimi [ 1, 2, 3, 4, 5 ]
console.log(...num); // imprimi 1 2 3 4 5

// ex:
console.log(Math.max(num)); 
console.log(Math.max(...num));// imprimi o maior valor do arr => 5