// The Barksdale Organization has a simple method for encoding telephone numbers exchanged via pagers:
// "Jump to the other side of the 5 on the keypad, and swap 5's and 0's."

// Here's a keypad for visualization.

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘

// Detective, we're hot on their trail! We have a big pile of encoded messages here to use as evidence,
// but it would take way too long to decode by hand. Could you write a program to do this for us?

// Write a function called decode(). Given an encoded string of exactly 10 digits,
// return the actual phone number in string form. Don't worry about input validation, parenthesis, or hyphens.

function decode(string) {
    let number = string.split('')
    for (i = 0; i < number.length; i++) {
        if (number[i] != 5 && number[i] != 0) {
            number[i] = 10 - number[i].toString()
        }
        if (number[i] == 5) {
            number[i] = '0'
        }
        else if (number[i] == 0) {
            number[i] = '5'
        }
    }
    return number.join('')
}

console.log(decode('4103432323'))

// SOLUTION:
//   function decode(string) {
//     return string.split("").map(function(value) {
//       return value==5 ? 0 : value==0 ? 5 : 10 - value;
//     }).join("");
//   }