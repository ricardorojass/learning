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
  queue(data: T): void
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
  private first: MyNodeInterface<T>
  private last: MyNodeInterface<T>


  queue(data: T): void {
    const node = new MyNodeClass<T>(data)
    if (this.last) {
      this.last.next = node
    }

    this.last = node
    if (!this.first) {
      this.first = this.last
    }
  }

  dequeue(): T {
    if (!this.first) {
      throw new Error('No items in the Queue')
    }
    const data: T = this.first.data
    this.first = this.first.next
    if (!this.first) {
      this.last = null
    }

    return data
  }

  peek(): T {
    if (!this.first) {
      throw new Error('No items found')
    }
    return this.first.data
  }

  size(): number {
    let counter = 0
    let item = this.first

    while (item) {
      counter++
      item = item.next
    }
    return counter
  }
}

const queue = new MyQueue<number>()

queue.queue(1)
queue.queue(2)
queue.queue(3)

console.log(
  queue.peek() === 1
)
console.log(
  queue.dequeue() === 1
)

console.log(
  queue.size() === 2
)
