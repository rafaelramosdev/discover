// podem estar em qualquer lugar, até mesmo como parâmetro de outras funções
// poderá ser entendida como uma variável

const sayMyName = () => console.log('John Joe')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))