function getAdultUsers(users) {
    let adultUsers = []
    if (users instanceof Array) {
        adultUsers = users.filter((item) => item.age > 18)
        
    } else {
        // const usersKeys = Object.keys(users)
        // console.log(usersKeys)
        // for (let i = 0; i < usersKeys.length; i++) {
        //     if(users[usersKeys[i]['age']] > 18){
        //         adultUsers.push(users[usersKeys[i]])
        //     }
        // adultUsers = {...users.filter((item) => item.age > 18)} 
        console.log(Object.entries(users))
        }
        // return console.log(adultUsers)
        
    }

const usersArray = [
    { id: '34rdca3eeb7f6fgeed471198', name: 'Andrew', age: 25 },
    { id: '76rdca3eeb7f6fgeed471100', name: 'Alexey', age: 15 },
    { id: '12rdca3eeb7f6fgeed4711012', name: 'Egor', age: 13 },
    { id: '32rdca3eeb7f6fgeed471101', name: 'Kate', age: 31 },
    { id: '98rdca3eeb7f6fgeed471102', name: 'Elena', age: 18 },
]
const usersObject = {
    '34rdca3eeb7f6fgeed471198': {
        id: '34rdca3eeb7f6fgeed471198',
        name: 'Andrew',
        age: 25,
    },
    '76rdca3eeb7f6fgeed471100': {
        id: '76rdca3eeb7f6fgeed471100',
        name: 'Alexey',
        age: 15,
    },
    '12rdca3eeb7f6fgeed4711012': {
        id: '12rdca3eeb7f6fgeed4711012',
        name: 'Egor',
        age: 13,
    },
    '32rdca3eeb7f6fgeed471101': {
        id: '32rdca3eeb7f6fgeed471101',
        name: 'Kate',
        age: 31,
    },
    '98rdca3eeb7f6fgeed471102': {
        id: '98rdca3eeb7f6fgeed471102',
        name: 'Elena',
        age: 18,
    },
}
console.log(usersObject['34rdca3eeb7f6fgeed471198']['age'])
getAdultUsers(usersObject)
