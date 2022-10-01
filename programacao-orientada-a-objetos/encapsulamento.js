// agrupamento de funções e variáveis dentro de uma classe
// esconder detalhes de implementação
// camada de segurança para atributos e métodos

// estrutural
let altura = 50
let largura = 60

function calcularArea() {
  return altura * largura
}

let area = calcularArea()

// orientado a objetos
class Poligono {
  constructor(altura, largura) {
    this.altura = altura
    this.largura = largura
  }

  get area() {
    return this.#calcularArea()
  }

  #calcularArea() { // '#' significa que este método/função não será visível fora desta classe
    return this.altura * this.largura
  }
}

// criar o objeto
let poligono = new Poligono(50, 60)
console.log(poligono.area)