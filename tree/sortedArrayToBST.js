/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (nums.length === 0) return null
    var headIndex = Math.floor((nums.length - 1) / 2)
    var head = new TreeNode(nums[headIndex])
    var leftArr = nums.slice(0, headIndex)
    var rightArr = nums.slice(headIndex + 1)
    var findLeftRight = function (node, leftA, rightA) {
        var leftLength, rightLength, leftIndex, rightIndex;
        if (leftA && leftA.length) {
            leftLength = leftA.length
            if (leftLength === 1) {
                node.left = new TreeNode(leftA[0])
            } else {
                leftIndex = Math.floor((leftA.length - 1) / 2)
                node.left = new TreeNode(leftA[leftIndex])
                findLeftRight(node.left, leftA.slice(0, leftIndex), leftA.slice(leftIndex + 1))
            }
        }
        if (rightA && rightA.length) {
            rightLength = rightA.length
            if (rightLength === 1) {
                node.right = new TreeNode(rightA[0])
            } else {
                rightIndex = Math.floor((rightA.length - 1) / 2)
                node.right = new TreeNode(rightA[rightIndex])
                findLeftRight(node.right, rightA.slice(0, rightIndex), rightA.slice(rightIndex + 1))
            }
        }
    }
    findLeftRight(head, leftArr, rightArr)
    return head
};

exports.sortedArrayToBST = sortedArrayToBST