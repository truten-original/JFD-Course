const text = 'Привет! Как дела! Давно мы с тобой не виделись.'
function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
    const indexes = []
    const arr = text.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === errorSymbol) {
            indexes.push(arr.indexOf(arr[i], i))
        }
    }
    if (indexes.length > 0) {
        for (i = 0; i < indexes.length; i++) {
            errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${indexes[i]}.`)
        }
    } else {
        successCallback('В данном тексте нет запрещенных символов')
    }
}
function showSuccessMessage(message) {
    console.log(message)
}
function showErrorMessage(message) {
    console.error(message)
}
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage)