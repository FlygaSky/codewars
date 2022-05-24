// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:
// 123 => [1,2,3]
// 1 => [1]
// 8675309 => [8,6,7,5,3,0,9]

function digitize(n) { 
    n = n.toString().split('')
    for(i=0; i<n.length; i++){
        n[i] = Number(n[i])
    }
    return n
}

console.log(digitize(123))

// SOLUTION:
// function digitize(n) {
//     return String(n).split('').map(Number);
//   }