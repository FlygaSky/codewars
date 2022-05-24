const RomanNumerals = {
    toRoman(number) {
        let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
        let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
        let result = []

        for (let i = 0; i < arabic.length; i++) {
            while (number >= arabic[i]) {
                result.push(roman[i])
                number -= arabic[i]
            }
        }
        return result.join('')
    },
    fromRoman(string) {
        let arabic = [1, 5, 10, 50, 100, 500, 1000]
        let roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
        let result = 0

        for (let i = 0; i < string.length; i++) {
            for (let j = 0; j < roman.length; j++) {
                if (string[i] == roman[j]) {
                    if (arabic.indexOf(arabic[j]) >= roman.indexOf(string[i+1])) {
                        result += arabic[j]
                    } else if (arabic.indexOf(arabic[j]) < roman.indexOf(string[i+1])) {
                        result -= arabic[j]
                    }
                }
            }
        }
        return result
    }
}

console.log(RomanNumerals.toRoman(1666))
console.log(RomanNumerals.fromRoman('MCMXC'))



