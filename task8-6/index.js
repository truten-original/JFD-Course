const numbers = [10, 4, 100, -5, 54, 2]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 3
}
console.log(sum)
sum = 0
for (let num of numbers) {
    sum += Math.pow(num, 3)
}
console.log(sum)
sum = 0
numbers.forEach((num) => sum += num ** 3)
console.log(sum)
numbers.reduce((sum, num) => sum += num ** 3, 0)
console.log(sum)
