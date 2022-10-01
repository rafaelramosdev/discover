// fila
// linear, um após o outro
// o primeiro elemento a entrar na fila é o primeiro a sair
// first in first out (FIFO)
// enqueue(), dequeue(), size() -> obter o tamanho da fila, front() -> pegar o primeiro elemento da fila

// passo 1: modelando
class Queue {
  constructor() {
    this.data = []
  }

  // back - é a referência do último elemento que entrou na fila
  enqueue(item) {
    this.data.push(item)

    console.log(`${item} chegou na fila`)
  }

  // front - é a referência do primeiro elemento que entrou na fila
  dequeue() {
    const item = this.data.shift() // 'shift' tira o primeiro elemento que entrou na fila/array
    
    console.log(`${item} saiu da fila`)
  }
}

// passo 2: utilizando
const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('João')
fila.enqueue('Ariel')
fila.dequeue()
fila.dequeue()
fila.dequeue()