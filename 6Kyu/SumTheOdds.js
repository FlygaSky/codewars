// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    let arrOdds = []
    for(let i=0; i<array.length; i++){
        if(array[i] % 2 != 0) {
            arrOdds.push(array[i])
            delete array[i]
        }
    }
    arrOdds = arrOdds.sort((a,b) => (a - b))
    for(let i=0; i<array.length; i++){
        if(array[i] === undefined) {
            array[i] = arrOdds[0]
            arrOdds.shift()
        }
    }
    return array
}

console.log(sortArray([ -50, -41, 50, 3, -26, 9, -5, 28, -20, -34, 28, -48, -35, -2, 20 ]))

// SOLUTION:
// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
//   }