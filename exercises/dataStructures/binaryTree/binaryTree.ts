// Insertar un nodo (dependiendo del tipo de árbol la ubicación puede ser asignada automática o manualmente).
// Remover un nodo
// Recorrer el árbol

interface NodeI<T> {
  value: T
  left: NodeI<T>
  right: NodeI<T>
}

class BST<T> {
  private value: T
  private left: BST<T>
  private right: BST<T>

  constructor(value: T) {
    this.value = value
    this.left = null
    this.right = null
  }

  add(data: T) {
    if (data === this.value) throw new Error('Value already exists')
    if (!this.value) {
      this.value = data
    } else {
      if (data < this.value) {
        if (!this.left) {
          this.left = new BST<T>(data)
        } else {
          this.left.add(data)
        }
      } else {
        if (!this.right) {
          this.right = new BST<T>(data)
        } else {
          this.right.add(data)
        }
      }
    }
  }

  // Searching
  find(data: T): BST<T> {
    if (data === this.value) {
      return this
    }
    if (data < this.value && this.left) {
      return this.left.find(data)
    }

    if (data > this.value && this.right) {
      return this.right.find(data)
    }

    return null
  }

  contains(data: T): boolean {
    return !!this.find(data)
  }

  // Traverse or Iterate
  traverseBFS(fn) {
    const root = this.find(this.value)
    const arr = [root]
    while (arr.length) {
      const node = arr.shift()
      if (node.left) arr.push(node.left)
      if (node.right) arr.push(node.right)

      fn(node)
    }
  }

  // Pending to finish
  traverseDFS(fn) {
    const root = this.find(this.value)
    if (!root) {
      return
    }
    const arr = [root]
    while (arr.length) {
      const node = arr.shift()
      if (node.left) [node.left].concat(arr)
      if (node.right) [node.right].concat(arr)
      fn(node)
    }
  }

  // The following traverse method are Depth First Search
  // visit the left branch, then the curren node, and finally the right
  inOrderTraversal(data: T, fn): void {
    const node = this.find(data)
    if (node) {
      if (!this.left) this.inOrderTraversal(node.left.value, fn)
      this.visit(node, fn)
      if (!this.right) this.inOrderTraversal(node.right.value, fn)
    }
  }
  // It visits the current node before its child nodes
  preOrderTraversal(data: T, fn): void {
    const node = this.find(data)
    if (node) {
      this.visit(node, fn)
      if (!this.left) this.preOrderTraversal(node.left.value, fn)
      if (!this.right) this.preOrderTraversal(node.right.value, fn)
    }
  }
  // It visits the curren node after its child nodes
  postOrderTraversal(data: T, fn): void {
    const node = this.find(data)
    if (node) {
      if (node.left) this.postOrderTraversal(node.left.value, fn)
      if (node.right) this.postOrderTraversal(node.right.value, fn)
      this.visit(node, fn)
    }
  }

  // The following methods are BFS Breath First Search

  visit(node: BST<T>, fn): void {
    fn(node, fn)
  }

  log(node: BST<T>) {
    console.log(JSON.stringify(node))
  }
}

module.exports = BST

const bst = new BST<number>(10)
bst.add(5)
bst.add(20)
bst.add(3)
bst.add(7)
bst.add(15)
// bst.visit(2, (data) => {
//   if (data === 2) {
//     console.log(data)
//   }
// })

bst.postOrderTraversal(10, (data) => {
  console.log(data);
})
// console.log(
//   bst.find(15)
// )
// console.log(
//   bst.contains(3)
// )


console.log(
  JSON.stringify(bst)
)

// Traverse BFS
let arrBST = []
bst.traverseBFS(node => {
  arrBST.push(node.value)
})

console.log(arrBST);

let arrDFS = []
bst.traverseDFS(node => {
  arrDFS.push(node.value)
})
arrDFS



