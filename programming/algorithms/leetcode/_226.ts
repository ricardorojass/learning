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

  // Go in Depth First Search
  // visit the left branch, then the curren node, and finally the right
  invertTree(root.left) // { 2, 1, 6 }
  invertTree(root.right) // { 3, 7, 9 }

  // Swap current node
  // { 2 -> left -> 1 right -> 3 }
  // { 7 -> left -> 6 right -> 9 }
  // { 4 -> left -> 2 right -> 7}
  const temp = root.left
  root.left = root.right
  root.right = temp


  return root
};