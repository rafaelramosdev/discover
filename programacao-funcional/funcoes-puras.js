// não depende de dados externos, exceto os que forem passados como argumento
// não sofre nenhuma interferência do mundo externo
// se o argumento é o mesmo, o retorno não pode ser diferente
// não tem efeito colateral (não modifica nenhum dado, não guarda nenhum estado)


// Função impura
// Exemplo 1: está dependendo de dado externo que não foi passado como parâmetro
function calculateCircumference(radius) {
  return Math.PI * (radius + radius)
}

// Exemplo 2: está alterando um dado externo
let person = {
  name: 'John Joe',
  age: 'young'
}

function changeName(name) {
  person.name = name
}

// Função pura

// Exemplo 1
const calculateCircumference = (pi, radius) => {
  return pi * (radius + radius)
}

// Exemplo 2
const changePersonName = (person, name) => ({ ...person, name })