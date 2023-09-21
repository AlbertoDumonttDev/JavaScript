const arr = [ 
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [
        [1,2,3],
        [4,5,6],
        [7,8,9],
    ],
];

console.table(arr); // mostrando toda a matrix
console.table(arr[0][1]); // mostrando a matrix por coordenada

console.table(arr[3][2][2]); // mostrando a matrix por coordenada