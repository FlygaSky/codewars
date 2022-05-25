// https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5
// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

// Examples:

//     "one" => 1
//     "twenty" => 20
//     "two hundred forty-six" => 246
//     "seven hundred eighty-three thousand nine hundred and nineteen" => 783919

// Additional Notes:

//     The minimum number is "zero" (inclusively)
//     The maximum number, which must be supported is 1 million (inclusively)
//     The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
//     All tested numbers are valid, you don't need to validate them

function parseInt(string) {
    let tenthTexts = ['million', 'thousand', 'hundred']
    let tenthNumbers = [1000000, 1000, 100]
    let regTexts = ['ninety', 'eighty', 'seventy', 'sixty', 'fifty', 'forty', 'thirty', 'twenty',
        'nineteen', 'eighteen', 'seventeen', 'sixteen', 'fifteen', 'fourteen', 'thirteen', 'twelve', 'eleven',
        'ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one', 'zero']
    let regNumbers = [90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

    let arrString = string.split(/-| /)
    let arrResult = []
    for (let i = 0; i < arrString.length; i++) {
        if (regTexts.includes(arrString[i]) && arrResult[arrResult.length-1] < 1000 && arrResult[arrResult.length-1] > 19) {
            arrResult[arrResult.length-1] += regNumbers[regTexts.indexOf(arrString[i])]
        } else if (regTexts.includes(arrString[i])) {
            arrResult.push(regNumbers[regTexts.indexOf(arrString[i])])
        } else if (tenthTexts.includes(arrString[i])) {
            arrResult[arrResult.length-1] *= tenthNumbers[tenthTexts.indexOf(arrString[i])]
        }
    }
    let result = 0
    for (let i = 0; i < arrResult.length; i++) {
        result += arrResult[i]
    }
    return result
}

console.log(parseInt('six hundred sixty six thousand six hundred sixty six'))
