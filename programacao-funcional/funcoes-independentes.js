// deve ter ao menos 1 argumento
// deve retornar algo
// nada que acontecer lá dentro afeta o mundo externo (dados imutáveis, não guarda estado)
// não utiliza loops (for, while), mas se for preciso, usa-se recursão (a função chama ela mesma)

const random = (number, Math) => {
  Math.floor(Math.random() * number)
}

// recursive
// Find the factorial of a number
const factorial = x => {

  // if number is 0
  if(x === 0) {
    return 1
  }

  return x * factorial(x - 1)
}