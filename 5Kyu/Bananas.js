// Given a string of letters a, b, n how many different ways can you make the word "banana" by crossing out various letters and then reading left-to-right?

// (Use - to indicate a crossed-out letter)
// Example

// Input

// bbananana

// Output

// b-anana--
// b-anan--a
// b-ana--na
// b-an--ana
// b-a--nana
// b---anana
// -banana--
// -banan--a
// -bana--na
// -ban--ana
// -ba--nana
// -b--anana

// Notes

//     You must return all possible bananas, but the order does not matter
//     The example output above is formatted for readability. Please refer to the example tests for expected format of your result.

var bananas = function (s) {
    // getting the all the indexes of b, a, and n
    let indexesOfB = []
    for (i = 0; i < s.length; i++) {
        if (s[i] === 'b') {
            indexesOfB.push(i)
        }
    }
    let indexesOfA = []
    for (i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            indexesOfA.push(i)
        }
    }
    let indexesOfN = []
    for (i = 0; i < s.length; i++) {
        if (s[i] === 'n') {
            indexesOfN.push(i)
        }
    }
    
    // calculating the number of possible combinations
    let possibleCombinations = 0
    if(indexesOfB)

    
    let result = []
    let subresult = []
    for (i = 0; i < indexesOfB.length; i++) {
        for (j = 0; j < indexesOfB.length; j++) {
            if (j === i) subresult.push(s[indexesOfB[i]])
            else subresult.push('-')
        }
    }

    return subresult
}

console.log(bananas('bbananana'))