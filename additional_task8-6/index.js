const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

const concatMatrix = matrix.reduce((acc, arr)=> acc.concat(arr), []) 

console.log(concatMatrix)