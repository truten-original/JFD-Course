let myNextBirthday = new Date(2022, 7, 6)
const daysFromMs = (ms) => Math.round(ms / 86400000)
const getDaysBeforeBirthday = (nextBirthdayDate) => {
    let timeToday = Date.now()
    console.log(timeToday)
    let birthday = nextBirthdayDate.getTime()
    console.log(birthday)
    let quantityDays = daysFromMs(birthday - timeToday)
    console.log(`до дня рождения ${quantityDays} дней`)
}
getDaysBeforeBirthday(myNextBirthday)


