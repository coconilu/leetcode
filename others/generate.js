/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) return []
    if (numRows === 1) return [[1]]
    if (numRows === 2) return [[1], [1, 1]]
    var result = [[1], [1, 1]], i = 2, temp, pre, j
    for (; i < numRows; ++i) {
        temp = [1]
        pre = result[i - 1]
        j = 1
        for (; j < pre.length; ++j) {
            temp.push(pre[j - 1] + pre[j])
        }
        temp.push(1)
        result.push(temp)
    }
    return result
};

exports.generate = generate