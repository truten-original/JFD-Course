class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    compareAge(person) {
        if (this.age < person.age) {
            console.log(`${this.name} младше ${person.name}`)
        } else if (this.age > person.age) {
            console.log(`${this.name} старше ${person.name}`)
        } else {
            console.log(`${this.name} и ${person.name} ровесники`)
        }
    }
}
const person1 = new Person("Максим", 24)
const person2 = new Person("Светлана", 36)
const person3 = new Person("Ирина", 23)

person1.compareAge(person2)
person2.compareAge(person3)
person3.compareAge(person1)