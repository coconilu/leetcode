const {
    sortedArrayToBST
} = require('./tree/sortedArrayToBST')

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// var tree = new TreeNode(1)
// tree.left = new TreeNode(2)
// tree.right = new TreeNode(2)
// tree.left.left = new TreeNode(3)
// tree.left.right = new TreeNode(3)
// tree.right.left = new TreeNode(2)
// tree.right.right = new TreeNode(3)
// tree.left.right.left = new TreeNode(2)
// tree.right.right.left = new TreeNode(2)

// console.log(sortedArrayToBST(tree))

var result = sortedArrayToBST([-10, -3, 0, 5, 9])

console.log(result)