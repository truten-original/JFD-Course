let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] = numbers[i] ** 3
    sum += numbers[i]
    console.log(sum, numbers[i])
    numbers[i] =Math.cbrt(numbers[i])  // вернем первоначальные значения массива numbers
    // узнаем значение numbers[i] и sum  на каждой итерации, цикл отрабатывает без ошибок
    

} 
console.log(sum) // 1158411

// Через цикл for of
sum = 0
for (let num of numbers){
    num = num ** 3
    sum += num
    // видим что значения num не соответствуют значениям исходного массива, из-за того что во время использования первого цикла они были возведены в третью степень, внесем небольшие изменения в первый цикл
    console.log(sum, num)
} 
console.log(sum) // 1003904306910622800