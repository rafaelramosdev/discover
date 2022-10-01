// encadeamento de funções
// uma função que retorna um dado e vai para outra função, que retorna um dado e vai para outra função, que retorna...
const people = ['Aaaaa', 'Bbbbb', 'Ccccc', 'Ddddd']
const upperCasePeopleThatStartsWithD = people
  .filter(person => person.startsWith('D'))
  .map(dperson => dperson.toUpperCase())