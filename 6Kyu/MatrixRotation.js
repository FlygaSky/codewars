// In this kata your mission is to rotate matrix counter - clockwise N-times.

// So, you will have 2 inputs:
// 1)matrix
// 2)a number, how many times to turn it

// And an output is turned matrix.
// Example:

// matrix = [[1, 2, 3, 4],
//           [5, 6, 7, 8],
//           [9, 10, 11, 12],
//           [13, 14, 15, 16]]

// times_to_turn = 1

// It should return this:

// [[4, 8, 12, 16],
//  [3, 7, 11, 15],
//  [2, 6, 10, 14],
//  [1, 5, 9, 13]])

// Note: all matrixes will be square. Also random tests will have big numbers in input (times to turn)

function rotateAgainstClockwise(matrix, times) {
    for (x = 0; x < times; x++) {
        return matrix[0].map((val, index) => matrix.map(row => row[row.length-1-index]))
    }
}

console.log(rotateAgainstClockwise([[1, 2, 3, 4],
                                    [5, 6, 7, 8],
                                    [9, 10, 11, 12],
                                    [13, 14, 15, 16]], 1))