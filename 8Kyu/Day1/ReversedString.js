// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  strToArr = str.split('')
  return strToArr.reverse().join('')
}

console.log(solution('world'))

// SOLUTION:
// function solution(str){
//     return str.split('').reverse().join('');  
//   }