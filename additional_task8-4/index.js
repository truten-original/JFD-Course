function getMathResult(...arr){
    if(arr.length > 2){
        const signs = ['>', '<', '+', '-', '=', '*', '/']
        const trueArr =  arr.filter((item)=>{
        if(signs.includes(item) || Boolean(Number(item))){
            return item
        }

    })
    let sign = trueArr[1]
    let result
    if(signs.includes(sign)){
        switch(sign){
            case '>' :
                result = Number(trueArr[0]) > Number(trueArr[2])
            break
            case '<' :
                 result = Number(trueArr[0]) > Number(trueArr[2])
            break
            case '+' :
                result = Number(trueArr[0]) + Number(trueArr[2])
            break
            case '-' :
                result = Number(trueArr[0]) - Number(trueArr[2])
            break
            case '=' :
                result = Number(trueArr[0]) === Number(trueArr[2])
            break
            case '*' :
                result = Number(trueArr[0]) * Number(trueArr[2])
            break
            case '/' :
                result = Number(trueArr[0]) / Number(trueArr[2])
            break
        }
        console.log(result)
    }

    }else{
        alert('ошибка')
    }
    
}
getMathResult('100', 'hello', 'javascript', 'help200', '/', 4)