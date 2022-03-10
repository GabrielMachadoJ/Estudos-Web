function multiplica(vetor, numero) {
    let novoVetor = []

    for(let i = 0; i < vetor.length; i++) {
        novoVetor.push(vetor[i] * numero)
    }
    return novoVetor
}


let vetor = [1, 2, 3, 4, 5]
console.log(multiplica(vetor, 2))

function multiplicaPor5(vetor2, numero5) {
    let novoVetor2 = []

    if(numero5 > 5) {
        for(let i = 0; i < vetor2.length; i++) {
            novoVetor2.push(vetor2[i] * numero5)
        }
    } else {
        return 'Tem que ser maior que 5'
    }
    return novoVetor2
}

let vetor2 = [1, 2, 3, 4, 5]
console.log(multiplicaPor5(vetor2, 6))