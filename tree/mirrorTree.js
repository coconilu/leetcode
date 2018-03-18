/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true
    var resultArr, i, resultArrLength, loopLength
    var resolveToArr = function (node) {
        var left = node.left,
            right = node.right,
            leftArr = rightArr = null,
            result = []
        if (!left && !right) return [node.val]
        if (!!left) {
            result = result.concat(resolveToArr(left))
        } else {
            result.push(left)
        }
        result.push(node.val)
        if (!!right) {
            result = result.concat(resolveToArr(right))
        } else {
            result.push(right)
        }
        return result
    }
    resultArr = resolveToArr(root)
    console.log(resultArr)
    resultArrLength = resultArr.length
    if (resultArrLength % 2 !== 1) return false
    for (i = 0, loopLength = (resultArrLength - 1) / 2; i < loopLength; ++i) {
        if (resultArr[i] !== resultArr[resultArrLength - 1 - i]) return false
    }
    return true
};

exports.isSymmetric = isSymmetric