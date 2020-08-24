// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path
// from the root node down to the nearest leaf node.
type TreeNode = {
  val: number,
  left: TreeNode,
  right: TreeNode
}

const root2: TreeNode = {
  val: 0,
  left: null,
  right: null
}
const root: TreeNode = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    },
  }
}

//              3
//             / \
//            9   20
//               /  \
//              15   7

function minDepth(root: TreeNode | null): number {
  
  // Caso base
  if (!root) return 0

  // Casos recursivos
  const left = minDepth(root.left)
  const right = minDepth(root.right)
  if (!left) return right + 1
  if (!right) return left + 1

  return Math.min(left, right) + 1
}

console.log(
  minDepth(root)
)
