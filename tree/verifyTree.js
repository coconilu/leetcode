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
var isValidBST = function (root) {
    if (!root) return true
    var resultArr, i, loopLength
    var resolveToArr = function (node) {
        var left = node.left,
            right = node.right,
            leftArr = rightArr = null,
            result = []
        if (!left && !right) return [node.val]
        if (!!left) result = result.concat(resolveToArr(left))
        result.push(node.val)
        if (!!right) result = result.concat(resolveToArr(right))
        return result
    }
    console.log(resolveToArr(root))
    resultArr = resolveToArr(root)
    for (i = 0, loopLength = resultArr.length - 1; i < loopLength; ++i) {
        if (resultArr[i] >= resultArr[i + 1]) return false
    }
    return true
};

exports.isValidBST = isValidBST