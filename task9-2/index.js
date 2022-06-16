const ordersArr = [4, 2, 1, 3]
const people = [
    { id: 1, name: "Максим" },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" },
]

function giveTalonsInOrder(patients, orders) {
     const trueOrder = orders.map(order =>  patients.find(item => item.id === order))
    // const trueOrder = []
    // for (let i = 0; i < orders.length; i++) {
    // let patient = patients.find(item => item.id === orders[i])
    // trueOrder.push(patient)
    // }
    console.log(trueOrder)
}
giveTalonsInOrder(people, ordersArr)