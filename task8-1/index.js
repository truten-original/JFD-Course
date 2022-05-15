const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

const giveParcel = () => {
   let name = peopleWaiting.shift()
   alert(`${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
}
giveParcel()
giveParcel()
giveParcel()
console.log(peopleWaiting)


const leaveQueueWithoutParcel = () => {
    while(peopleWaiting.length > 0){
       let lostHuman = peopleWaiting.pop()
       alert(`${lostHuman} не получил(а) посылку и ушел(ла) из очереди`)
    }
}
leaveQueueWithoutParcel()
console.log(peopleWaiting)