// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"

// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

function formatDuration(seconds) {
    let result = [];
    let y = Math.floor(seconds / 31536000)
    let year = (y > 1 ? `${y} years` : y > 0 ? `${y} year` : '')
    if (y > 0) {result.push(year)}
    seconds = seconds % 31536000

    let d = Math.floor(seconds / 86400)
    let day = (d > 1 ? `${d} days` : d > 0 ? `${d} day` : '')
    if (d > 0) {result.push(day)}
    seconds = seconds % 86400

    let h = Math.floor(seconds / 3600)
    let hour = (h > 1 ? `${h} hours` : h > 0 ? `${h} hour` : '')
    if (h > 0) {result.push(hour)}
    seconds = seconds % 3600

    let m = Math.floor(seconds / 60)
    let minute = (m > 1 ? `${m} minutes` : m > 0 ? `${m} minute` : '')
    if (m > 0) {result.push(minute)}

    let s = seconds % 60
    let second = (s > 1 ? `${s} seconds` : s > 0 ? `${s} second` : '')
    if (s > 0) {result.push(second)}


    let str = result.length == 0 ? 'now' : result.length == 1 ? result[0] : result.slice(0, result.length - 1).join(", ") + " and " + result[result.length - 1]
    return str
}

console.log(formatDuration(1))
console.log(formatDuration(62))
console.log(formatDuration(120))
console.log(formatDuration(3600))
console.log(formatDuration(3662))