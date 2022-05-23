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
    const animal = {}
    animal.name = this.name
    animal.type = this.type
    animal.isDomestic = isDomestic
    animal.makeSound = this.makeSound
    return console.log(animal, `${animal.type} по имени ${animal.name} говорит ${animal.makeSound()}`)
}
makeDomestic.bind(dog, true)()
makeDomestic.call(bird, false)
makeDomestic.apply(bird, [false])