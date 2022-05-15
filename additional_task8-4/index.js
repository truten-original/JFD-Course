const matrix = []
const matrixIn = []
for (let i = 0; i < 3; i++) {
    for (let b = 1; b < 6; b++) {
        if (matrixIn.length === 5) {
            continue
        } else {
            matrixIn.push(b)
        }
    }
    matrix.push(matrixIn)
}
console.log(matrix)