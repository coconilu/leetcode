 const {
     isSymmetric
 } = require('./tree/mirrorTree')

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

 var tree = new TreeNode(1)
 tree.left = new TreeNode(2)
 tree.right = new TreeNode(3)
 tree.left.left = new TreeNode(3)
//  tree.left.right = new TreeNode(4)
 tree.right.left = new TreeNode(2)
//  tree.right.right = new TreeNode(3)

 console.log(isSymmetric(tree))