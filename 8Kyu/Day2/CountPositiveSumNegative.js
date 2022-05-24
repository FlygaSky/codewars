// Given an array of integers.

// Return an array, where the first element is the count of positives numbers
// and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input array is empty or null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    resultArr = []
    if (input != undefined || input != null) {
        let countPositive = 0
        let sumNegative = 0
        input.forEach(value => {
            if (value > 0) {
                countPositive++
            } if (value < 0) {
                sumNegative += value
            }
        })
        resultArr.push(countPositive, sumNegative)
    } return resultArr
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
console.log(countPositivesSumNegatives())