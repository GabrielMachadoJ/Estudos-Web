const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 3.4, bolsista: false },
    { nome: 'Ana', nota: 9.5, bolsista: true },
]   

// Desafio 1: Todos os alunos são bolsista?
const bolsista = alunos => alunos.bolsista
const todosBolsistas = (resultado, bolsista) => resultado && bolsista

const resultado = alunos.map(bolsista).reduce(todosBolsistas)

console.log(resultado)

// Desafio 2: Algum aluno é bolsista?
const algumBolsistas = (resultado, bolsista) => resultado || bolsista

const resultado2 = alunos.map(bolsista).reduce(algumBolsistas)

console.log(resultado2)