// molde para objetos
// objetos são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe
// syntactical sugar
// prototype

// definir classe
class Pessoa {
  constructor(name) {
    this.id = ~~(Math.random() * 100000)
    this.name = name
  }

  dizerNome() {
    console.log(this.name)
  }
}

// criar objeto
const pessoa = new Pessoa('John Joe')
console.log(pessoa)