// Given a random non-negative number, you have to return the digits
// of this number within an array in reverse order.
// Example:

// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
    let numOfDigit = 0
    let copyOfN = n
    for (i = copyOfN; i >= 1; i /= 10) {
        numOfDigit++
    }
    if(n == 0){
        numOfDigit = 1
    }

    let newArray = []
    for (i = 0; i < numOfDigit; i++) {
        newArray.push(Math.floor(n % (Math.pow(10, (numOfDigit-i)))/(Math.pow(10, (numOfDigit-i-1)))))
    }
    return newArray.reverse()
}

console.log(digitize(12345))
console.log(digitize(348597))
console.log(digitize(0))

// SOLUTION:
// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//   }