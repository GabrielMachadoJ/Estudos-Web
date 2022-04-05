const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false },
]

const caro = valor => valor.preco >= 500
const fragil = quebravel => quebravel.fragil

console.log(produtos.filter(caro).filter(fragil))