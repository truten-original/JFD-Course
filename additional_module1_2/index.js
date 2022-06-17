function checkLetters(str1, str2) {
    let isEqual
    const arr1 = str1.toLowerCase().split('').sort((a, b) => a.localeCompare(b))
    const arr2 = str2.toLowerCase().split('').sort((a, b) => a.localeCompare(b))
    console.log(arr1)
    console.log(arr2)
    const checkArr = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            checkArr.push(true)
        } else {
            checkArr.push(false)
        }
        console.log(checkArr)
    }
    if (checkArr.includes(false)) {
        isEqual = false
    } else {
        isEqual = true
    }
    return isEqual
}
console.log(checkLetters("адрес", "среда"))
console.log(checkLetters("ноутбук", "программист"))