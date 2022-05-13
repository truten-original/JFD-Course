const coffees = ['Latte', 'Cappuccino', 'Americano']
let coffeeName = prompt('Поиск кофе по названию:').toLowerCase()
let coffeeToUpperCase = coffeeName.replace(coffeeName[0], coffeeName[0].toUpperCase())
let coffeeIndex = coffees.indexOf(coffeeToUpperCase)
if (coffeeIndex !== -1) {
    alert(`Держите ваш любимый кофе ${coffeeToUpperCase}. ${coffees.findIndex((coffee) => coffee === coffeeToUpperCase) + 1}й по популярности в нашей кофейне.`)
} else {
    alert('К сожалению, такого вида кофе нет в наличии')
}