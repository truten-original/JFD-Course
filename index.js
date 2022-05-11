// getSumOfNumbers = (number = 10, type) => {
//     let sum = 0
//     if (type === 'even') {
//         for (i = 1; i <= number; i++) {
//             if (i % 2 === 0) {
//                 sum += i
//             }
//         }
//     } else if (type === 'odd') {
//         for (i = 1; i <= number; i++) {
//             if (i % 2 !== 0) {
//                 sum += i
//             }
//         }
//     } else if (type === '') {
//         for (i = 1; i <= number; i++) {
//             sum += i
//         }
//     }
//     return sum
// }

getSumOfNumbers = (number, type = 'odd') => {
    let sum = 0
    for (i = 1; i <= number; i++) {
        const isEven = i % 2 === 0
        const isOdd = !isEven
        if (type === 'even' && isEven) {
            sum += i
        } else if (type === 'odd' && isOdd) {
            sum += i
        } else if (type === '') {
            sum += i
        }
    }
    return sum
}