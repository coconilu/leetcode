/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    var n = x ^ y, count = 0
    while (n !== 0) {
        if (n & 1 === 1) {
            ++count
        }
        n = n >> 1
    }
    return count
};

exports.hammingDistance = hammingDistance