const getDateFormat = (date, separator = '.') => {
    let year = String(date.getFullYear())
    let mounth = String(date.getMonth() + 1)
    let dateNow = String(date.getDate())
    if(mounth < 10){
        mounth = 0 + mounth
    }
    if(date < 10){
        date = 0 + date
    }
    const units = [
        dateNow,
        mounth,
        year
    ]
    console.log(units.join(separator))


}
getDateFormat(new Date())