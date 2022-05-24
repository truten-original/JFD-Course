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
function makeDomestic(isDomestic) {
    const animal = {
        isDomestic: isDomestic,
    }
    const objArr = Object.keys(this)
    for (let i = 0; i < objArr.length; i++) {
        animal[objArr[i]] = this[objArr[i]]
    }
    animal.makeSound = function () { console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`) }
    return animal

    // const animal = {}
    // animal.name = this.name
    // animal.type = this.type
    // animal.isDomestic = isDomestic
    // animal.makeSound = function(){
    //     console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
}

console.log(makeDomestic.bind(dog, true)())
makeDomestic.call(bird, false)
makeDomestic.apply(bird, [false])