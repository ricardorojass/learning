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
    this.insertAt(data, 0)
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
    return this.getAt(0)
  }

  getLast() {
    // if (!this.head) {
    //   return null
    // }

    // let node = this.head
    // while (node) {
    //   if (!node.next) {
    //     return node
    //   }
    //   node = node.next
    // }
    return this.getAt(this.size() - 1)
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

  insertLast(data: number | string) {
    const last = this.getLast()
    if (last) {
      // There are nodes
      last.next = new NodeClass(data)
    } else {
      // List is empty
      this.head = new NodeClass(data)
    }
  }

  getAt(index: number) {
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

  removeAt(index: number) {
    if (!this.head) {
      return
    }

    if (index === 0) {
      this.head = this.head.next
      return
    }

    let previous = this.getAt(index - 1)
    if (!previous || !previous.next) {
      return
    }
    previous.next = previous.next.next
  }

  insertAt(data: string | number, index: number) {
    if (!this.head) {
      this.head = new NodeClass(data)
      return
    }

    if (index === 0) {
      this.head = new NodeClass(data, this.head)
      return
    }

    const previous = this.getAt(index - 1) || this.getLast()
    const node = new NodeClass(data, previous.next)
    previous.next = node
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

console.log(
  list.getAt(0)
)







