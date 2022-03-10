function negativos(vetor) {
    let qtdNegativo = 0

    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            qtdNegativo++
        }
    }
    return qtdNegativo
}

vetor = [1, 3, -4, 5, 6, -1, 3, -4, -3, -5, -6]
console.log(negativos(vetor))