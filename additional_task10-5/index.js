function getAdultUsers(users) {
  if (Array.isArray(users)) {
    const adultUsers = users.filter((item) => item.age >= 18)
    console.log(adultUsers)
  } else {
    // const usersEntries = Object.entries(users)
    // // console.log(usersEntries)
    // const trueUsers = usersEntries.filter((item) => item[1]['age'] >= 18)
    // const trueUsersObj = trueUsers.reduce((newObj, item) => {
    //   newObj[item[0]] = item[1]
    //   return newObj
    // }, {})
    // console.log(trueUsersObj)
    const usersKeys = Object.keys(users)
    const trueUsers = usersKeys.filter((user) => users[user].age >= 18)
    console.log(trueUsers)
    const trueObject = trueUsers.reduce((obj, user) => {
      obj[user] = users[user]
      return obj
    }, {})
    console.log(trueObject)
  }
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
getAdultUsers(usersObject)
getAdultUsers(usersArray)
