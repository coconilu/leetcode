/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    var valArr = [[root.val]], nodeArr = [[root]];// 一个存储数值，一个存储节点
    var traverse = function (preArr) {
        if (preArr.length === 0) return
        var nextNodeArr = [], nextValArr = []
        for (var i = 0, length = preArr.length; i < length; ++i) {
            if (!!preArr[i].left) {
                nextNodeArr.push(preArr[i].left)
                nextValArr.push(preArr[i].left.val)
            }
            if (!!preArr[i].right) {
                nextNodeArr.push(preArr[i].right)
                nextValArr.push(preArr[i].right.val)
            }
        }
        if (nextValArr.length !== 0) valArr.push(nextValArr)
        if (nextNodeArr.length !== 0) nodeArr.push(nextNodeArr)
    }
    for (var i = 0; i < nodeArr.length; ++i) {
        traverse(nodeArr[i])
    }
    return valArr
};

exports.levelOrder = levelOrder