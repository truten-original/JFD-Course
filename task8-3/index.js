const coffees = ['Latte', 'Cappuccino', 'Americano']
cofeName = prompt('Поиск кофе по названию:').toLowerCase()
hasName = coffees.some((coffee) => {
    return coffee.toLowerCase() === cofeName
})
console.log(cofeName)
if (hasName) {
    let coffeeToUpperCase = cofeName.replace(cofeName[0], cofeName[0].toUpperCase())
    alert(`Держите ваш любимый кофе ${coffeeToUpperCase}. ${coffees.indexOf(coffeeToUpperCase) + 1}й по популярности в нашей кофейне.`)
} else {
    alert('К сожалению, такого вида кофе нет в наличии')
}