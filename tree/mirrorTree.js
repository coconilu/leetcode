/** 需要前序遍历
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
        // 前序遍历，先左后右
        var result = []
        if (!node.left && !node.right) return [node.val]
        result.push(node.val)
        if (!!node.left) {
            result = result.concat(traverseLeft(node.left))
        } else {
            result.push(node.left)
        }
        if (!!node.right) {
            result = result.concat(traverseLeft(node.right))
        } else {
            result.push(node.right)
        }
        return result
    }
    var traverseRight = function (node) {
        // 前序遍历，先右后左
        var result = []
        if (!node.left && !node.right) return [node.val]
        result.push(node.val)
        if (!!node.right) {
            result = result.concat(traverseRight(node.right))
        } else {
            result.push(node.right)
        }
        if (!!node.left) {
            result = result.concat(traverseRight(node.left))
        } else {
            result.push(node.left)
        }
        return result
    }
    if (!!root.left) leftArr = leftArr.concat(traverseLeft(root.left))
    if (!!root.right) rightArr = rightArr.concat(traverseRight(root.right))
    console.log(leftArr)
    console.log(rightArr)
    if (leftArr.length !== rightArr.length) return false
    for (var i = 0, arrLength = leftArr.length; i < arrLength; ++i) {
        if (leftArr[i] !== rightArr[i]) return false
    }
    return true
};

exports.isSymmetric = isSymmetric