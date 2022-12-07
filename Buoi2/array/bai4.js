const sum = (start, end) => {
    const number = Math.floor((end - start) / 5) + 1
    const sum = (start + end) * number / 2
    return sum
}
console.log(sum(0, 10));