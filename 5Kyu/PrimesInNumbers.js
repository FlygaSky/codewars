// https://www.codewars.com/kata/54d512e62a5e54c96200019e

// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"

// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactors(n) {
    let factors = []
    let divisor = 2

    while (n >= 2) {
        if (n % divisor == 0) {
            factors.push(divisor)
            n = n / divisor
        } else {
            divisor++
        }
    }

    let a = [], // factors (1x each)
        b = [], // number of times each factor appears
        prev

    for (let element of factors) {
        if (element !== prev) {
            a.push(element)
            b.push(1)
        }
        else b[b.length - 1] += 1
        prev = element
    }

    let result = ''
    for (i = 0; i < a.length; i++) {
        if (b[i] === 1) result += `(${a[i]})`
        else result += `(${a[i]}**${b[i]})`
    }
    return result
}

console.log(primeFactors(7775460)) // (2**2)(3**3)(5)(7)(11**2)(17)