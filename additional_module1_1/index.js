function findWinner(arr) {
    const someApplicant = []
    for (let i = arr[0]; i <= arr[1]; i++) {
        if (i % 3 === 0 && i % 7 === 0 && i % 5 !== 0 && i % 2 !== 0) {
            someApplicant.push(i)
        }
    }
    someApplicant.sort((a, b) => a - b)
    const winner = someApplicant[someApplicant.length - 1]
    return winner
}
console.log(findWinner([1016, 1937]))