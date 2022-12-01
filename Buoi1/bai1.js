// BAI TAP STRING


//------------------- bai1----------------------------
function checkStringExist(string_current, string_check) {
    let result = string_current.includes(string_check);
    if (result == true) {
        console.log('true')
    } else {
        console.log('false')
    }

}

checkStringExist("Amela A Beta", "Beta")

//------------------- bai2----------------------------
function shortenString(message_two) {
    let cutString = message_two.slice(0, 8)
    let newString = cutString.concat('...')
    console.log(newString);
}

shortenString('Xin chao các bạn')

//------------------- bai3----------------------------
function repeatString_bai3(message_three) {
    let newString = message_three;
    for (let i = 0; i < 9; i++) {
        newString = newString.concat(message_three)
    }
    console.log(newString)
}

repeatString_bai3('Dang');

//------------------- bai4----------------------------
function repeatString_bai4(message_four) {
    let newString = message_four;
    for (let i = 0; i < 9; i++) {
        newString = newString.concat('-')
        newString = newString.concat(message_four)
    }
    console.log(newString)
}

repeatString_bai4('a')

//------------------- bai5----------------------------
function repeatString_bai5(message_five, n) {
    let newString = message_five;
    for (let i = 1; i < n; i++) {
        newString = newString.concat('-')
        newString = newString.concat(message_five)
    }
    console.log(newString)
}

repeatString_bai5('a', 7)

//------------------- bai6----------------------------
function reverseString(message_six) {
    let newString = message_six.split('').reverse().join('');
    console.log(newString)
}
reverseString('Hello')

//------------------- bai7----------------------------
function checkString(message_seven) {
    let newString = message_seven.toUpperCase().split(' ').join('');
    let newString1 = message_seven.toUpperCase().split('').reverse().join('').split(' ').join('');
    if (newString === newString1) {
        console.log('true')
    } else {
        console.log('false')
    }
}
checkString('race car')
checkString('heeloo ')
//------------------- bai8----------------------------
function checkUpperCase(message_eight) {
    let newString = message_eight.toUpperCase();
    if (newString === message_eight) {
        console.log('true')
    } else {
        console.log('false')
    }
}
checkUpperCase('HASa')

//BAI TAP NUMBER
//------------------- bai1----------------------------
function hinhCau(R) {
    let pi = 3.14
    return 4 / 3 * pi*R*R*R
}
console.log(hinhCau(1))

//------------------- bai2----------------------------
function sumBetween(start,end){
    
    let n=end-start+1
    let sum=(start+end)*n/2-start-end
    console.log(sum)
}
sumBetween(3,8)
//------------------- bai3----------------------------
