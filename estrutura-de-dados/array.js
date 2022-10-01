// dinâmicos
// pode ter dados de diferentes tipos misturados
// push(), pop(), find(), filter()
const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

// a indexação (index) começa pelo número 0
console.log(pilotos[0]) // Senna
console.log(pilotos[3]) // Hamilton

// acessar o tamanho do array
console.log(pilotos.length)

// é iterável (quando é possível utilizar o 'for' e 'of' )
for (let piloto of pilotos) {
  console.log(piloto)
}

// adicionar elemento
pilotos.push('Alonso')
console.log(pilotos)

// encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna') // se for true, retornará o conteúdo deste array // se false, não retornará nada
console.log(senna)

// deletar um elemento
pilotos.splice(1, 1) // dessa forma na posição um, deletará um elemento
console.log(pilotos)
