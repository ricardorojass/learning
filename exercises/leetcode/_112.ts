// Given a binary tree and a sum,
// determine if the tree has a root-to-leaf
// path such that adding up all the values
// along the path equals the given sum.

function hasPathSum(root: TreeNode | null, sum: number): boolean {
  if (root === null) return false

  if (!root.left && !root.right && sum - root.val == 0) {
      return true
  } else {
      return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
  }
};


console.log(
  hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1], 22),
  22
)