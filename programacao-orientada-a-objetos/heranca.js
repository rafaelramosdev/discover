// pais e filhos
// objetos herdam/estendem características bases
// uma cópia de atributos e métodos de outra classe

class Veiculo {
  rodas = 4

  mover(direcao) {}

  virar(direcao) {}
}

class Moto extends Veiculo {
  constructor() {
    super() // puxa atributos e métodos do pai
    this.rodas = 2
  }
}