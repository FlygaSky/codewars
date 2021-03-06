// https://www.codewars.com/kata/546e2562b03326a88e000020

// In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let arrNum = num.toString().split('')
    for(i=0; i<arrNum.length; i++){
        arrNum[i] = Math.pow(arrNum[i], 2)
    }
    return Number(arrNum.join(''))
  }

  console.log(squareDigits(9119))