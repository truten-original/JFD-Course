function isPalindrome(str) {
    let isReverse
    const reverseStr = str.split('').reverse().join('')
    if (str === reverseStr) {
        isReverse = true
    } else {
        isReverse = false
    }
    return console.log(isReverse)
}
isPalindrome("racecar"); // true
isPalindrome("programmer")