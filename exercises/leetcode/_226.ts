// Invert a binary tree.
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

function invertTree(root: TreeNode | null): TreeNode | null {

  if (!root) return root

  const temp = root.left
  root.left = root.right
  root.right = temp

  invertTree(root.left)
  invertTree(root.right)

  return root
};