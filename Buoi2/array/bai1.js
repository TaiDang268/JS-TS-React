const minNumbers = (arr) => {
    console.log(arr.sort());
    return arr.sort()[0]
}
console.log(minNumbers([6, 4, 7, 3, 5, 7]));