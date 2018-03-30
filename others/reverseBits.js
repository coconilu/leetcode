/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    var result = [], i = 32
    while (i--) {
        result.push(n & 1)
        n = n >> 1
    }
    return parseInt(result.join(''), 2)
};

exports.reverseBits = reverseBits