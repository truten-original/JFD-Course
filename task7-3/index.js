

const number = Number(prompt('Введите число'))
if (Number.isInteger(number) && number > 0) {
    getDivisorsCount(number)
} else {
    alert('number должен быть целым числом и больше нуля!')
}
function getDivisorsCount(number) {
    let counter = 0
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            counter++
        }
    }
    return console.log(counter)
}