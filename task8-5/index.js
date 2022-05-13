const clientsEstimations = []

function askClientToGiveEstimation() {
    let estimation = prompt('Как вы оцениваете нашу кофейню от 1 до 10?', 10)
    if (typeof (estimation === 'number')) {
        clientsEstimations.push(estimation)
    }else if(!estimation){
        alert('пожалуйста используйте числа от 1 до 10 для оценки')
    }
}
for (let i = 0; i < 5; i++){
    askClientToGiveEstimation()
}
const goodEstimations = clientsEstimations.filter(estimation => estimation > 5)
const notGoodEstimations = clientsEstimations.filter(estimation => estimation <= 5)
alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`)