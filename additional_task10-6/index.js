function allowVisa(arr){
    const date = new Date()
    const filterArr = arr.filter((person) => {
        const arrPersonNum = person.passportExpiration.split('.').map(item=>Number(item))
        if(new Date(arrPersonNum[0], arrPersonNum[1], arrPersonNum[2]).getTime() < date.getTime() && person.criminalRecord === false){
            return person
        }

    })
    console.log(filterArr)
}
const peopleWithVisa = [
    {
    firstName: 'Stasia',
    lastName: 'Ward',
    criminalRecord: true,
    passportExpiration: '19.06.2023',
    },
    {
    firstName: 'Elliot',
    lastName: 'Baker',
    criminalRecord: false,
    passportExpiration: '04.06.2021',
    },
    {
    firstName: 'Leighann',
    lastName: 'Scott',
    criminalRecord: true,
    passportExpiration: '31.07.2022',
    },
    {
    firstName: 'Nick',
    lastName: 'Pop',
    criminalRecord: false,
    passportExpiration: '31.12.2021',
    },
    ]
allowVisa(peopleWithVisa)
console.log(peopleWithVisa)