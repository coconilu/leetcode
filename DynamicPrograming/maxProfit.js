/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var min = prices[0],
        value = 0,
        i = 1,
        length = prices.length
    for (; i < length; ++i) {
        value = Math.max(value, prices[i] - min)
        if (prices[i] < min) min = prices[i]
    }
    return value
};