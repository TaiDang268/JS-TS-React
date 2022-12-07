const max2Numbers = (arr) => {
    const lengthArr = arr.length
    const max = arr[lengthArr - 1]
    let max2
    arr.sort()
    arr.reverse()
    for (let i = 0; i < lengthArr; i++) {
        if (arr[i] < max) {
            max2 = arr[i]
            break
        }

    }
    return max2
}
console.log(max2Numbers([6, 4, 7, 3, 5, 7, 8]));