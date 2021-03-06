// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'i' || str[i] == 'u' || str[i] == 'e' || str[i] == 'o') {
            vowelsCount++
        }
    }
    return vowelsCount;
}

console.log(getCount('abecede'))

// SOLUTION:
// function getCount(str) {
//     return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//    }