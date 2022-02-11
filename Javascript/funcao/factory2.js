function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

const novoProduto = criarProduto('lapis', 10)
const novoProduto2 = criarProduto('lapiseira', 100)

console.log(novoProduto)
console.log(novoProduto2)