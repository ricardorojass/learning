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
  list.valueAt(0).data === 15
)

console.log(
  list.valueAt(3).data === 8
)

console.log(
  list.removeAt(0)
)

console.log(
  list.valueAt(0).data === 20
)







