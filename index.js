getSumOfNumbers = (number = 10, type) => {
    let sum = 0
    if (type === 'even') {
        for (i = 1; i <= number; i++) {
            if (i % 2 === 0) {
                sum += i
            }
        }
    } else if (type === 'odd') {
        for (i = 1; i <= number; i++) {
            if (i % 2 !== 0) {
                sum += i
            }
        }
    } else if (type === '') {
        for (i = 1; i <= number; i++) {
            sum += i
        }
    }
    return sum
}


