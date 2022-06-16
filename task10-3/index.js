let dateNow = new Date()
const addDays = (date, days = 1) => {
    const addedDays = date.getTime() + days * 86400000
    console.log(addedDays)
    console.log(new Date().getTime())
    console.log(new Date(addedDays))
}
addDays(dateNow, 10)