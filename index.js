let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0
// let num

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    let num = numbers[i]
    sum += num ** 3
    console.log(sum, numbers[i])


}
console.log(sum) // 1158411

// Через цикл for of
sum = 0
for (let num of numbers) {
    sum += num ** 3
    // видим что значения num не соответствуют значениям исходного массива, из-за того что во время использования первого цикла они были возведены в третью степень, инициализируем переменную num и будем присваивать ей значение number[i] ** 3, тем самым избежим мутирования первоначального массива
    console.log(sum, num)
}
console.log(sum) // 1003904306910622800