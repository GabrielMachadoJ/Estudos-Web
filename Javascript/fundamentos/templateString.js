const nome = 'Rebecca'
const concatenacao = 'Olá ' + nome + '!'
const template = `

    Olá
    ${nome}!` //Crase

console.log(concatenacao, template)

//expressoes...

console.log(`1 + 1 = ${1 + 1}`)

const maiuscula = texto => texto.toUpperCase()

console.log(`Ei... ${maiuscula('cuidado')}!`)
