function getKiller(suspectInfo, deadPeople) {
    let buglar
    for (item in suspectInfo) {
        const trueOrFalseArr = []
        for (let i = 0; i < deadPeople.length; i++) {
            let checkVar
            checkVar = suspectInfo[item].indexOf(deadPeople[i], i)
            trueOrFalseArr.push(checkVar)
        }
        if (!trueOrFalseArr.includes(-1)) {
            buglar = item
        }
    }
    console.log(buglar)
}
getKiller(
    {
        James: ['Jacob', 'Bill', 'Lucas'],
        Johnny: ['David', 'Kyle', 'Lucas'],
        Peter: ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
)
