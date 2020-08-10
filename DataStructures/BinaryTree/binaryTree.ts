// Insertar un nodo (dependiendo del tipo de árbol la ubicación puede ser asignada automática o manualmente).
// Remover un nodo
// Recorrer el árbol

interface MyNodeInterface<T> {
  data: T,
  left: MyNodeInterface<T>
  right: MyNodeInterface<T>
}

class MyNode<T> {
  data: T
  left: MyNodeInterface<T>
  right: MyNodeInterface<T>

  constructor(data: T, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BST<T> {
  private root: MyNode<T>
  constructor() {
    this.root = null
  }

  add(value: T): void {
    const node = this.root
    if (node === null) {
      this.root = new MyNode<T>(value)
      return
    } else {
      const searchTree = function(node: MyNodeInterface<T>) {
        if (value <= node.data) {
          if (node.left === null) {
            node.left = new MyNode<T>(value)
            return
          } else {
            return searchTree(node.left)
          }
        } else if (value > node.data) {
          if (node.right === null) {
            node.right = new MyNode<T>(value)
            return
          } else {
            return searchTree(node.right)
          }
        } else {
          return null
        }
      }
      return searchTree(node)
    }
  }

  contains(value: T): boolean {
    let current = this.root
    while (current) {
      if (value === current.data) {
        return true
      }
      if (value < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

  remove(value: T): void {
    const node = this.root
    if (value === node.data) {

    }
  }

}


const bst = new BST<number>()
bst.add(10)
bst.add(15)
bst.add(5)
bst.add(8)

console.log(
  bst
)

console.log(
  bst.contains(15)
)

console.log(
  // node.remove(1)
)

console.log(

)


