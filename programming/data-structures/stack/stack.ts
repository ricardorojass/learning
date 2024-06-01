interface NodeInterface<T> {
  data: T,
  next: NodeInterface<T>
}

interface StackInterface<T> {
  push(data: T): void
  pop(): T
  peek(): T
  size(): number
}

class MyNodeStack<T> {
  data: T
  next: NodeInterface<T> = null

  constructor(data: T, next: NodeInterface<T> = null) {
    this.data = data
    this.next = next
  }
}

class MyStack<T> implements StackInterface<T> {
  private top: MyNodeStack<T>

  pop(): T {
    if (!this.top) {
      throw new Error('No items in the Stack')
    }
    const item = this.top.data
    this.top = this.top.next
    return item
  }

  push(data: T): void {
    const item = new MyNodeStack(data)
    item.next = this.top
    this.top = item
  }

  peek(): T {
    if (!this.top) {
      throw new Error('No items found')
    }
    return this.top.data
  }

  size(): number {
    let counter = 0
    let item = this.top

    while (item) {
      counter++
      item = item.next
    }
    return counter
  }

  display(): void {
    let stack = this.top;
    while (stack) {
      console.log(stack.data);
      stack = stack.next;
    }
  }
 }

const stack = new MyStack<string>()
stack.push('Yellow')
stack.push('Blue')
stack.push('Red')
stack.display();
