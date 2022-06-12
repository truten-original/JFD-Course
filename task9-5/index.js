function sum(...args) {
    let sum = args.reduce((acc, num) => acc += num, 0)
    return sum
}
console.log(sum(1, 2, 3)) // 6
console.log(sum(2, 2)) // 4
console.log(sum(10, 15, 249, 653, 846)) // 1773