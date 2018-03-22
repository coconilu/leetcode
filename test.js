 const {
     isSymmetric
 } = require('./tree/mirrorTree')

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

 var tree = new TreeNode(5)
 tree.left = new TreeNode(4)
 tree.right = new TreeNode(1)
//  tree.left.left = new TreeNode(3)
 tree.left.right = new TreeNode(1)
//  tree.right.left = new TreeNode(2)
 tree.right.right = new TreeNode(4)
 tree.left.right.left = new TreeNode(2)
 tree.right.right.left = new TreeNode(2)

 console.log(isSymmetric(tree))