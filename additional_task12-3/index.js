class CarService {
    static defaultWorkingHours = {
        from: '9:00',
        till: '20:00'
    }
    constructor(name, workingHours = CarService.defaultWorkingHours) {
        this.name = name
        this.workingHours = workingHours
    }
    repairCar(carName) {
        if (carName && typeof (carName) === 'string') {
            const timeArr = Object.values(this.workingHours).map((item) => {
                return item = item.split(':')
            })
            const trueTimeArr = timeArr.map((item) => item = Number(item[0]))

            if (Number(new Date().getHours()) > trueTimeArr[0] && Number(new Date().getHours()) < trueTimeArr[1]) {
                console.log(`Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`)
            } else {
                console.log('К сожалению, мы сейчас закрыты. Приходите завтра')
            }
        } else {
            console.error('Вам необходимо указать название машины, чтобы ее отремонтировать')
        }
    }
}
const carService = new CarService("RepairCarNow", {
    from: "8:00",
    till: "20:00"
})
carService.repairCar("BMW");

