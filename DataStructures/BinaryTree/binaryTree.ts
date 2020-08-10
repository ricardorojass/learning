// Insertar un nodo (dependiendo del tipo de árbol la ubicación puede ser asignada automática o manualmente).
// Remover un nodo
// Recorrer el árbol

class MyNode<T> {
  value: T
  left: MyNode<T>
  right: MyNode<T>

  constructor(value: T, left: MyNode<T> = null, right: MyNode<T> = null) {
    this.value = value
    this.left = left
    this.right = right
  }

  addNode(node: MyNode<T>): void {
    if (node.value < this.value) {
      if (this.left === null) {
        this.left = node
      } else {
        this.left.addNode(node)
      }
    } else if (node.value > this.value) {
      if (this.right === null) {
        this.right = node
      } else {
        this.right.addNode(node)
      }
    }
  }

  visit(): void {
    if (this.left !== null) {
      this.left.visit()
    }
    if (this.right !== null) {
      this.right.visit()
    }
  }

  search(val: T): any {
    if (this.value === val) {
      return this
    } else if (val < this.value && this.left !== null) {
      return this.left.search(val)
    } else if (val > this.value && this.right !== null) {
      return this.right.search(val)
    }
    return null
  }

  // contains(value: T): boolean {
  //   if (value === this.data) {
  //     return true
  //   } else if (value < this.data) {
  //     if (this.left === null) {
  //       return false
  //     } else {
  //       return this.left.contains(value)
  //     }
  //   } else {
  //     if (this.right === null) {
  //       return false
  //     } else {
  //       return this.right.contains(value)
  //     }
  //   }
  // }
}

class BST<T> {
  private root: MyNode<T>
  constructor() {
    this.root = null
  }

  addValue(value: T) {
    const node = new MyNode<T>(value)
    if (this.root === null) {
      this.root = node
    } else {
      this.root.addNode(node)
    }
  }

  traverse() {
    this.root.visit()
  }

  search(val) {
    return this.root.search(val)
  }
}

const bst = new BST<number>()
for (let i = 0; i < 10; i++) {
  bst.addValue(Math.floor(Math.random() * 5))
}
bst.traverse()

// const node = new MyNode<number>(10)

console.log(
  JSON.stringify(bst)
)

console.log(
  bst.search(1)
)



