const sample = (arr) => {
    let lengthArr = arr.length
    let randomIndex = Math.floor(Math.random() * lengthArr)
    return arr[randomIndex]
}

console.log(sample([1, 2, 5, 4, 3,4,6,3,7,8]));