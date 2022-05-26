class Developer {
    fullName
    position
    age
    technologies = []
    constructor(fullName, age, position) {
        this.fullName = fullName
        this.age = age
        this.position = position
    }
    code() { }
    learnNewTechnologies(technology) {
        this.technologies.push(technology)
    }
}
class JuniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Junior')
        this.technologies = ['HTML', 'CSS', 'JavaScript']
    }
    code() {
        console.log(`${this.position} разработчик пишет код`)
    }
}
class MiddleDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Middle')
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React']
    }
    code() {
        console.log(`${this.position} разработчик пишет код`)
    }
}
class SeniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Senior')
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
    }
    code() {
        console.log(`${this.position} разработчик пишет код`)
    }
}
const jun = new JuniorDeveloper('roma', 23)
const mid = new MiddleDeveloper('roma', 23)
const sen = new SeniorDeveloper('roma', 23)
jun.code()
console.log(jun.technologies)
mid.code()
console.log(mid.technologies)
sen.code()
console.log(sen.technologies)