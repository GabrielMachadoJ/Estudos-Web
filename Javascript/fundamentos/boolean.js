let isAtivo = true
console.log(isAtivo)

isAtivo = false
console.log(isAtivo)


isAtivo = 1
console.log(!!isAtivo) //Verdadeiro
console.log(!isAtivo) //Falso


//Duas vezes o não se anula
console.log(!true) //Não verdadeiro = false
console.log(!!true) //2*Não verdadeiro = true
console.log(!!false) //2*Não falso = false
console.log(!false)//Não falso = true

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')//espaço em branco
console.log(!!'texto')
console.log(!![])//Array
console.log(!!{})//Objeto
console.log(!!Infinity)
console.log(!!(isAtivo=true))


console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo= false))

console.log('pra finalizar...')
console.log(('' || null || 0 || 'Primeiro verdadeiro' || '123'))
console.log(!!('' || null || 0 || 'Primeiro verdadeiro' || '123'))

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Pedro'
console.log(nome || 'Desconhecido')