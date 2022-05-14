const goals = [8, 1, 1, 3, 2, -1, 5]


function findBestResult(...arr) {
    const matchResults = arr.sort((a, b) => a - b)
    let index = arr.indexOf(matchResults[matchResults.length - 1])
    let matchPosition = index + 1
    let numberOfGoals = goals[index]
    alert(`Самый результативный матч был под номером ${matchPosition}. В нем было забито ${numberOfGoals} гол(ов).`)
}
function findWorseResult(arr) {
    const positiveNums = arr.filter((num) => num > 0)
    const matchResults = positiveNums.sort((a, b) => b - a)
    let indexesPosition = []
    let i = 0
    let index = arr.indexOf(matchResults[matchResults.length - 1])
    let numberOfGoals = goals[index]
    while (index !== -1) {
        index = arr.indexOf(matchResults[matchResults.length - 1], i++)
        if (index !== -1) {
            indexesPosition.push(index + 1)
        }
        i++
    }
    alert(`Самые нерезультативные матчи были под номерами ${indexesPosition.join(', ')}. В каждом из них было забито по ${numberOfGoals} мячу(а).`)
}

function seasonTotal(arr) {
    const positiveNums = arr.filter((num) => num > 0)
    let goalsTotal =  positiveNums.reduce((acc, num)=> acc += num, 0)
    console.log(goalsTotal)
}
function checkAutoLoses (arr){
    hasAutoLose = arr.some((num)=> num < 0)
    if(hasAutoLose){
        alert('Были автоматические поражения: да')
    }else{
        alert('Были автоматические поражения: нет')
    }
}

function averageGoals(arr) {
    const positiveNums = arr.filter((num) => num > 0)
    let sum = positiveNums.reduce((sum, num)=> sum += num)
    let numberOfGoals = Math.floor(sum/positiveNums.length)
    alert(`Среднее количество голов за матч равно ${numberOfGoals}`)
} 
function fromLowToUp (arr){
    const positiveNums = arr.filter((num) => num > 0)
    const toUpNums = positiveNums.sort((a, b) => a-b)
    alert(`фильтрация по возрастанию: ${toUpNums.join(', ')}` )
}

findBestResult(goals)
findWorseResult(goals)
seasonTotal(goals)
checkAutoLoses(goals)
averageGoals(goals)
fromLowToUp(goals)
console.log(goals)