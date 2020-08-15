// Las operaciones principales de una lista encadenada son:
// * Insertar un valor en una posición (por defecto al final).
// * Obtener un valor por posición.
// * Recorrer las posiciones.
// * Eliminar una posición.

interface NodeType {
  data: string | number
  next?: NodeType
}

interface LinkedListInterface {
  head: NodeType
  add(data: string | number): void
  addAt(index: number, data: string | number): void
  removeAt(index: number): void
  valueAt(index: number): NodeType
}

class NodeClass {
  data: string | number
  next: NodeType = null

  constructor(data: string | number, next: NodeType = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList implements LinkedListInterface {
  head: NodeType

  constructor() {
    this.head = null
  }

  add(data: string | number) {
    const last = this.valueAt(this.size() - 1)
    if (last) {
      // There are nodes
      last.next = new NodeClass(data)
    } else {
      // List is empty
      this.head = new NodeClass(data)
    }
  }

  addAt(index: number, data: string | number) {
    if (!this.head) {
      this.head = new NodeClass(data)
      return
    }

    if (index === 0) {
      this.head = new NodeClass(data, this.head)
      return
    }

    const previous = this.valueAt(index - 1) || this.valueAt(this.size() - 1)
    const node = new NodeClass(data, previous.next)
    previous.next = node
  }

  removeAt(index: number) {
    if (!this.head) {
      return
    }

    if (index === 0) {
      this.head = this.head.next
      return
    }

    let previous = this.valueAt(index - 1)
    if (!previous || !previous.next) {
      return
    }
    previous.next = previous.next.next
  }

  valueAt(index: number) {
    if (!this.head) {
      return null
    }
    let counter = 0
    let node = this.head
    while (node) {
      if (counter === index) {
        return node
      }

      counter++
      node = node.next
    }
    return null
  }

  size() {
    let counter = 0
    let node = this.head

    while (node) {
      counter++
      node = node.next
    }
    return counter
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) {
      return
    }

    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) {
      return
    }

    if (!this.head.next) {
      this.head = null
      return
    }

    let previous = this.head
    let node = this.head.next
    while (node.next) {
      previous = node
      node = node.next
    }
    previous.next = null
  }

  reverse(): LinkedList {
    let currentNode = this.head
    let previousNode = null
    let nextNode = null

    while (currentNode) {
      // Store next node
      // 15, 20, 2, 8
      nextNode = currentNode.next // 20, 2, 8

      currentNode.next = previousNode // null, 15, 2, 8

      previousNode = currentNode // 15, 2, 8
      currentNode = nextNode // 20, 2, 8
    }


    this.head = previousNode
    return this
  }

  middle() {
    // si el length es par devolver el anterios sino devuelve el de la mitad
    return this.valueAt(this.size() / 2)
  }
}

const list = new LinkedList()
list.add(15)
list.add(20)
list.add(2)
list.addAt(3, 8)

console.log(
  list.size()
)

console.log(
  list.middle()
)

console.log(
  list.valueAt(list.size() -1).data
)

console.log(
  list.valueAt(3).data === 8
)

// console.log(
//   list.removeAt(0)
// )

console.log(
  list.valueAt(0).data === 20
)

const reverseList = list.reverse()
console.log(
  reverseList
)


console.log(
  list.valueAt(list.size() - 1).data
)
for (let i = 0; i< list.size(); i++) {
  console.log(list.valueAt(i).data)
}








