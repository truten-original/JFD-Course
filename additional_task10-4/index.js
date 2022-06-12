function getWinner(applicants, winnerObject) {
    const applicantsArr = Object.keys(applicants)
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min 
    }
    const randomNumber = getRandom(0, applicantsArr.length - 1)
    const winner = applicants[applicantsArr[randomNumber]]
    const result = { ...winnerObject, ...winner }
    console.log(result)
}
const todaysWinner = {
    prize: '10 000$',
}
const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    '201': {
        name: 'Светлана',
        age: 20,
    },
    '304': {
        name: 'Екатерина',
        age: 35,
    }
}
getWinner(winnerApplicants, todaysWinner)