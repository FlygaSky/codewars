// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]

// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

function sumPairs(ints, s) {
    let indexes = []
    for (i = 0; i < ints.length; i++) {
        for (j = 0; j < ints.length; j++) {
            if (ints[i] + ints[j] === s && i < j) {
                indexes.push(i)
                indexes.push(j)
            }
        }
    }
    let prev = Infinity,
        finalIndexes = [0,0]

    for (i = 1; i < indexes.length; i += 2) {
        if(indexes[i] < prev){
            finalIndexes[0] = indexes[i-1]
            finalIndexes[1] = indexes[i]
        }
        prev = indexes[i]
    }

    if (finalIndexes[0] == finalIndexes[1]) return undefined
    else return [ints[finalIndexes[0]], ints[finalIndexes[1]]] 
}


console.log(sumPairs([1, 4, 8, 7, 3, 15], 8))
console.log(sumPairs([20, -13, 40], -7 ))

// kode sudah berfungsi tapi time out kalau element terlalu banyak :(

