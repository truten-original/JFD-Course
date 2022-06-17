function unique(arr) {
    const finalArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!finalArr.includes(arr[i])) {
            finalArr.push(arr[i])
        } else {
            continue
        }
    }
    return console.log(finalArr)
}





unique([1, 1, 2, 2, 4, 2, 3, 7, 3])
