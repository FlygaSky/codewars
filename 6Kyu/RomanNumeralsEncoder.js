// https://www.codewars.com/kata/51b62bf6a9c58071c600001b

function solution(number){
    let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
          let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
          let result = []
  
          for (let i = 0; i < arabic.length; i++) {
              while (number >= arabic[i]) {
                  result.push(roman[i])
                  number -= arabic[i]
              }
          }
          return result.join('')
  }