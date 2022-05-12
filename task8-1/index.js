const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

const giveParcel = (name) => {
    let person = peopleWaiting.splice(peopleWaiting.indexOf(name), 1)
    alert(`${person} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
}
giveParcel('Кристина')
giveParcel('Олег')
giveParcel('Кирилл')
console.log(peopleWaiting)


const leaveQueueWithoutParcel = () => {
   let length = peopleWaiting.length
    for(let i = 0; i<length; i++){
       let lostHuman = peopleWaiting.pop()
       alert(`${lostHuman} не получил(а) посылку и ушел(ла) из очереди`)
    }
}
leaveQueueWithoutParcel()
console.log(peopleWaiting)