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
/*var isSymmetric = function (root) {
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
};*/


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
    if (!root.left && !root.right) return true
    var leftArr = [],
        rightArr = [];
    var traverseLeft = function (node) {
        var result = []
        if (!node.left && !node.right) return [node.value]
        if (!!node.left) {
            result = result.concat(traverseLeft(node.left))
        }
        result.push(node.value)
        if (!!node.right) {
            result = result.concat(traverseLeft(node.right))
        }
        return result
    }
    var traverseRight = function (node) {
        var result = []
        if (!node.left && !node.right) return [node.value]
        if (!!node.right) {
            result = result.concat(traverseRight(node.right))
        }
        result.push(node.value)
        if (!!node.left) {
            result = result.concat(traverseRight(node.left))
        }
        return result
    }
    if (!!root.left) leftArr.concat(traverseLeft(root.left))
    if (!!root.right) rightArr.concat(traverseRight(root.right))
    console.log(leftArr)
    console.log(leftArr)
    if (leftArr.length !== rightArr.length) return false
    for (var i = 0, arrLength = leftArr.length; i < arrLength; ++i) {
        if (leftArr[i] !== rightArr[i]) return false
    }
    return true
};

exports.isSymmetric = isSymmetric