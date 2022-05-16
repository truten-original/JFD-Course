function getMathResult(arr){
    if(arr.length > 2){
        const signs = ['>', '<', '+', '-', '=', '*', '/']
        const trueArr =  arr.filter((item)=>{
        if(signs.includes(item) || Number(item)){
            return item
        }

    })
    let sign = trueArr[1]
    let result
    if(signs.includes(sign)){
        const a = Number(trueArr[0])
        const b = Number(trueArr[2])
        switch(sign){
            case '>' :
                result = a > b
            break
            case '<' :
                 result = a > b
            break
            case '+' :
                result = a + b
            break
            case '-' :
                result = a - b
            break
            case '=' :
                result = a === b
            break
            case '*' :
                result = a * b
            break
            case '/' :
                result = a / b
            break
        }
        return result
    }

    }else{
        alert('ошибка')
    }
    
}
console.log(getMathResult(["200", "+", 300])); // 500
console.log(getMathResult(["20", "-", "5"])); // 15
console.log(getMathResult([100, "/", 100])); // 1
console.log(getMathResult([2, "-", 2])); // 0
console.log(getMathResult(["5", ">", "10"])); // false
console.log(getMathResult(["5", "<", "10"])); // true
console.log(getMathResult(["1", "=", 1])); // true
console.log(getMathResult(["100", "hello", "javascript", , "help200", "+", 4])); // 'Ошибка'