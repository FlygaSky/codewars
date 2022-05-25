// https://www.codewars.com/kata/51b6249c4612257ac0000005

function solution (string) {
    let arabic = [1, 5, 10, 50, 100, 500, 1000]
    let roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    let result = 0
      for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < roman.length; j++) {
          if (string[i] == roman[j]) {
            if (arabic.indexOf(arabic[j]) >= roman.indexOf(string[i+1])) {
              result += arabic[j]
            } else if (arabic.indexOf(arabic[j]) < roman.indexOf(string[i+1])) {
              result -= arabic[j]
            }
          }
        }
      }
    return result
  }