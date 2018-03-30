/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    var count = 0
    while (n > 0) {
        if (n % 2 === 1) {
            ++count
            n = (n - 1) / 2
        } else {
            n = n / 2
        }
    }
    return count
};

exports.hammingWeight = hammingWeight