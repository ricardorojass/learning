interface NodeType {
  data: string | number
  next?: NodeType
}

class NodeClass {
  data: string | number
  next: NodeType = null

  constructor(data: string | number, next: NodeType = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  head: NodeType

  constructor() {
    this.head = null
  }

  insertFirst(data: number | string) {
    this.head = new NodeClass(data, this.head)
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

  getFirst() {
    return this.head
  }

  getLast() {
    if (!this.head) {
      return null
    }

    let node = this.head
    while (node) {
      if (!node.next) {
        return node
      }
      node = node.next
    }
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
}

const nodeOne = new NodeClass(5)
const list = new LinkedList()
list.head = nodeOne
list.insertFirst(15)
list.insertFirst(20)
list.insertFirst(2)

console.log(
  list.size()
)

console.log(
  list.getFirst()
)

console.log(
  list.getLast()
)

console.log(
  list.removeFirst()
)


