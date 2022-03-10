function buscar(numeroVetor) {
    let qtdEntre = 0
    let qtdFora = 0

    for(let i = 0; i < numeroVetor.length; i++) {
        if(numeroVetor[i] >= 10 && numeroVetor[i] <= 20) {
            qtdEntre++
        } else {
            qtdFora++
        }
    }
    return `A quantidade fora do intervalo é ${qtdFora} e dentro é ${qtdEntre}`
}

let vetor = [11, 12, 13, 21, 23, 14, 54]

console.log(buscar(vetor))