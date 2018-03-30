/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n === 1) return true
    if (n < 3) return false
    var temp = 3
    while (temp <= n){
        if (temp === n) return true
        temp = temp * 3
    }
    return false
};