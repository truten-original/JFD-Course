const getDateFormat = (date, separator = '.') => {
    let year = String(date.getFullYear())
    let mounth = date.getMonth() + 1
    let dateNow = date.getDate()
    if(mounth < 10){
        mounth = 0 + String(mounth)
    }
    if(dateNow < 10){
        dateNow = 0 + String(dateNow)
    }
    const units = [
        dateNow,
        mounth,
        year
    ]
    console.log(units.join(separator))


}
getDateFormat(new Date())