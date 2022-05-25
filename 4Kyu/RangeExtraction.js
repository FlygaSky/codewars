// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

// A format for expressing an ordered list of integers is to use a comma separated list of either

//     individual integers
//     or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

function solution(list) {
    //creating new array for 3+ consequent numbers
    arrRanged = []
    for (i = 0; i < list.length; i++) {
        if ((list[i + 1] - list[i] === 1 && list[i] - list[i - 1] === 1) ||
            (list[i + 1] - list[i] === 1 && list[i + 2] - list[i + 1] === 1) ||
            (list[i] - list[i - 1] === 1 && list[i - 1] - list[i - 2] === 1)) {
            arrRanged.push(list[i])
        }
    }

    // removing 3+ consequent numbers from list
    list = list.filter(function (number) {
        if (!arrRanged.includes(number)) {
            return number
        }
    });

    // getting the first numbers from every consequent numbers
    let firstNumbers = []
    for (i = 0; i < arrRanged.length; i++) {
        if (arrRanged[i] - arrRanged[i - 1] !== 1) {
            firstNumbers.push(arrRanged[i])
        }
    }

    // putting first numbers back into list and sorting the list
    let final = list.concat(firstNumbers)
    final = final.sort(function (a, b) { return a - b })

    // getting the last numbers from every consequent numbers
    let lastNumbers = []
    for (i = 0; i < arrRanged.length; i++) {
        if (arrRanged[i + 1] - arrRanged[i] !== 1) {
            lastNumbers.push(arrRanged[i])
        }
    }

    // changing first numbers into ranges with the last numbers
    for (i = 0; i < final.length; i++) {
        if (firstNumbers.includes(final[i])) {
            final[i] = `${final[i]}-${lastNumbers[0]}`
            lastNumbers.splice(0, 1)
        }
    }
    final = final.join(',')

    return final
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))


// SOLUTION:
// function solution(list){
//     for(var i = 0; i < list.length; i++){
//        var j = i;
//        while(list[j] - list[j+1] == -1) j++;
//        if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
//    }
//    return list.join();
//  }