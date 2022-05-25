// https://www.codewars.com/kata/525f4206b73515bffb000b21

// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
// Example

// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

// Notes

//     The input numbers are big.
//     The input is a string of only digits
//     The numbers are positives


function add(a, b) {
  let rep, a1, a2, b1, b2, adder, result
  let arrResult = []

  // ### if a is longer than b
  if (a.length > b.length) {
    rep = b.length
    a1 = a.split("").slice(0, a.length - b.length)
    a2 = a.split("").slice(a.length - b.length)
    b = b.split("")
    adder = 0
    for (i = 0; i < rep; i++) {
      result = Number(a2[a2.length - i - 1]) + Number(b[b.length - i - 1]) + adder
      if (result > 9) {
        result -= 10
        arrResult.unshift(result)
        adder = 1
      } else {
        adder = 0
        arrResult.unshift(result)
      }
    }
    for (i = 0; i < a1.length; i++) {
      a1[a1.length - i - 1] = Number(a1[a1.length - i - 1]) + adder
      if (a1[a1.length - i - 1] > 9) {
        a1[a1.length - i - 1] -= 10
        adder = 1
      } else {
        adder = 0
      }
    }
    if (adder == 1) {
      adder = [adder]
      return adder.concat(a1, arrResult).join("")
    } else {
      return a1.concat(arrResult).join("")
    }

    // ### if b is longer than a
  } else if (a.length < b.length) {
    rep = a.length
    b1 = b.split("").slice(0, b.length - a.length)
    b2 = b.split("").slice(b.length - a.length)
    a = a.split("")
    adder = 0
    for (i = 0; i < rep; i++) {
      result = Number(b2[b2.length - i - 1]) + Number(a[a.length - i - 1]) + adder
      if (result > 9) {
        result -= 10
        arrResult.unshift(result)
        adder = 1
      } else {
        adder = 0
        arrResult.unshift(result)
      }
    }
    for (i = 0; i < b1.length; i++) {
      b1[b1.length - i - 1] = Number(b1[b1.length - i - 1]) + adder
      if (b1[b1.length - i - 1] > 9) {
        b1[b1.length - i - 1] -= 10
        adder = 1
      } else {
        adder = 0
      }
    }
    if (adder == 1) {
      adder = [adder]
      return adder.concat(b1, arrResult).join("")
    } else {
      return b1.concat(arrResult).join("")
    }

    // ### a and b length are the same
  } else {
    rep = a.length
    adder = 0
    for (i = 0; i < rep; i++) {
      result = Number(b[b.length - i - 1]) + Number(a[a.length - i - 1]) + adder
      if (result > 9) {
        result = result - 10
        arrResult.unshift(result)
        adder = 1
      } else {
        adder = 0
        arrResult.unshift(result)
      }
    }
    if (adder == 1) {
      adder = [adder]
      return adder.concat(arrResult).join("")
    } else {
      return arrResult.join("")
    }
  }
}


console.log(add('12345', '12345'))