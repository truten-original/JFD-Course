function getSumOfNumbers(number) {
    let sum
    const numbers = []
    for (let i = 1; i <= number; i++) {
        numbers.push(i)
    }
    sum = numbers[0] + numbers[numbers.length - 1]

    return sum
}
