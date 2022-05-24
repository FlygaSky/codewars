// Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

// For example,

// 11 => [2, 3, 5, 7, 11]

function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function prime(n) {
    var arr = []
    if (n < 2) {
        return arr
    }
    else {
        arr = [2]
        for (var i = 3; i < n; i += 2) {
            if (isPrime(i)) {
                arr.push(i);
            }
        }
    return arr
    }
}