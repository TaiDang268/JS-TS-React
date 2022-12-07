const checkLength = (arr) => {
    let maxLength = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length
        }
    }
    return maxLength
}
const printString = (arr) => {
    let result = arr.filter(arrItem => arrItem.length == checkLength(arr))
    return result
    // let arr2 = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].length == checkLength(arr)) {
    //         arr2.push(arr[i])
    //     }
    // }
    // return arr2
}
console.log(printString(['aba', 'aa', 'ad', 'c', 'vcd']));