// Las operaciones principales de una cola son:
// * Agregar un valor (al final de la list)
// * Obtener el primer valor.
// * Remover el primer valor
// * Obtener el tamaño.

interface MyNodeInterface<T> {
  data: T,
  next?: MyNodeInterface<T>
}

interface MyQueueInterface<T> {
  enqueue(data: T): void
  dequeue(): T
  peek(): T
  size(): number
}

class MyNodeClass<T> {
  data: T
  next: MyNodeInterface<T> = null

  constructor(data: T, next: MyNodeInterface<T> = null) {
    this.data = data
    this.next = next
  }
}

class MyQueue<T> implements MyQueueInterface<T> {
  // private first: MyNodeInterface<T>
  // private last: MyNodeInterface<T>
  private head: MyNodeInterface<T>

  enqueue(data: T): void {
    if (!this.head) {
      this.head = new MyNodeClass<T>(data)
    } else {
      let node = this.head
      while (node.next) {
        node = node.next
      }
      node.next = new MyNodeClass<T>(data)
    }
  }

  dequeue(): T {
    if (!this.head) {
      return null
    }
    const head = this.head
    this.head = this.head.next
    return head.data
  }

  peek(): T {
    if (!this.head) {
      return null
    }
    return this.head.data
  }

  // O(n)
  size(): number {
    let counter = 0
    let item = this.head

    while (item) {
      counter++
      item = item.next
    }
    return counter
  }
}

const queue = new MyQueue<number>()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(
  queue.peek() === 1
)
console.log(
  queue.dequeue()
)

console.log(
  queue.size()
)
