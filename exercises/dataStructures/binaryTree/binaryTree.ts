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

  visitDFS(data, fn): void {
    fn(data)
    if (!this.left) this.left.visitDFS(data, fn)
    if (!this.right) this.right.visitDFS(data, fn)
  }

}

const bst = new BST<number>(8)
bst.add(3)
bst.add(10)
bst.add(1)
bst.add(6)
bst.add(4)
bst.add(7)
bst.add(14)
bst.add(13)
bst.visitDFS(2, (data) => {
  if (data === 2) {
    console.log(data)
  }
})

console.log(
  JSON.stringify(bst)
)





