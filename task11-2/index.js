const dog = {
    name: "Чарли",
    type: "Собака",
    makeSound() {
        return "Гав-Гав";
    }
}

const bird = {
    name: "Петя",
    type: "Воробей",
    makeSound() {
        return "Чик-чирик";
    }
}
// function makeDomestic(isDomestic) {
//     const animal = {
//         isDomestic: isDomestic,

//     }
//     const objArr = Object.keys(this)
//     for (let i = 0; i < objArr.length; i++) {
//         animal[objArr[i]] = this[objArr[i]]
//     }
//     console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
//     return animal
// }
function makeDomestic(isDomestic) {
    const animal = { ...this, isDomestic: isDomestic }
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
    return animal
}
console.log(makeDomestic.bind(dog, true)())
console.log(makeDomestic.call(bird, false))
console.log(makeDomestic.apply(bird, [false]))