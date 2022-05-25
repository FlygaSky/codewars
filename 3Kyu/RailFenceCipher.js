// https://www.codewars.com/kata/58c5577d61aefcf3ff000081

function encodeRailFenceCipher(string, numberRails) {
    let matrix = []
    let matrixRow = []
    for (let i = 0; i < numberRails; i++) {
        for (let j = 0; j < string.length; j++) {
            matrixRow.push(0)
        }
        let matrixRowCopy = [...matrixRow]
        matrix.push(matrixRowCopy)
        matrixRow.splice(0, string.length)
    }

    let dirDown = false, row = 0, col = 0

    for (let i = 0; i < string.length; i++) {
        if (row == 0 || row == numberRails - 1) {
            dirDown = !dirDown;
        }
        matrix[row][col++] = string[i]
        dirDown ? row++ : row--
    }

    matrix1d = [].concat(...matrix)
    matrixFiltered = matrix1d.filter(function (value) {
        return value !== 0
    })

    return matrixFiltered.join('')
}

function decodeRailFenceCipher(string, numberRails) {
    let matrix = []
    let matrixRow = []
    for (let i = 0; i < numberRails; i++) {
        for (let j = 0; j < string.length; j++) {
            matrixRow.push(0)
        }
        let matrixRowCopy = [...matrixRow]
        matrix.push(matrixRowCopy)
        matrixRow.splice(0, string.length)
    }
    let dirDown = false, row = 0, col = 0

    for (let i = 0; i < string.length; i++) {
        if (row == 0 || row == numberRails - 1) {
            dirDown = !dirDown;
        }
        matrix[row][col++] = 1
        dirDown ? row++ : row--
    }
    let index = 0;
    for (let i = 0; i < numberRails; i++) {
        for (let j = 0; j < string.length; j++) {
            if (matrix[i][j] === 1 && index < string.length) {
                matrix[i][j] = string[index++];
            }
        }
    }
    let result = []
    dirDown = false, row = 0, col = 0

    for (let i = 0; i < string.length; i++) {
        if (row == 0 || row == numberRails - 1) {
            dirDown = !dirDown;
        }
        result.push(matrix[row][col++])
        dirDown ? row++ : row--
    }
    return result.join('')
}

console.log(encodeRailFenceCipher('hello #007', 3))
console.log(decodeRailFenceCipher('ho0el 07l#', 3))