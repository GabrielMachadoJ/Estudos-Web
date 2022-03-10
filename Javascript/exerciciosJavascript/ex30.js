function maiorMenor(numeroVetor) {
    let maiorNumero
    let menorNumero

    for(let i = 0; i < numeroVetor.length; i++) {
        if(maiorNumero === undefined && menorNumero === undefined) {
            maiorNumero = numeroVetor[i]
            menorNumero = numeroVetor[i]
        } else if(numeroVetor[i] > maiorNumero) {
            maiorNumero = numeroVetor[i]
        } else if(numeroVetor[i] < menorNumero) {
            menorNumero = numeroVetor[i]
        }
    }
    return [menorNumero, maiorNumero]
}

let vetor = [11, 12, 95, 10, 23, 14, 54]

console.log(maiorMenor(vetor))