// pilha
// linear, um após o outro
// o último elemento a entrar na pilha é o primeiro a sair
// last in first out (LIFO)
// push(), pop(), peek(), size() -> obter o tamanho da pilha

// passo 1: modelando
class Stack {
  constructor() {
    this.data = []
    this.top = -1
  }

  // adicionar um elemento à pilha
  push(value) {
    this.top++
    this.data[this.top] = value

    return this.data
  }

  // remover o elemento do topo da pilha
  pop() {
    if (this.top < 0) {
      return undefined
    }

    const poppedTop = this.data[this.top]
    delete this.data[this.top]
    this.top--

    return poppedTop
  }

  // obter o elemento do topo da pilha
  peek() {
    return this.top >= 0 ? this.data[this.top] : undefined
  }
}

// passo 2: utilizando
const stack = new Stack()

// adicionar dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

console.log(stack.peek())

// remover
stack.pop()
console.log(stack.pop())

console.log(stack.peek())