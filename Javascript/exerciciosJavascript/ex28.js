function vetores(vetorNumero) {
    let qtdPar = 0
    let qtdImpar = 0

    for(let i = 0; i < vetorNumero.length; i++) {
        if(vetorNumero[i] % 2 == 0) {
            qtdPar ++
        } else {
            qtdImpar ++
        }
    }
    return `O total de impares é ${qtdImpar} e o de pares é ${qtdPar}`
}

let vetor = [1,2,3,4,5,6,7,8,9,10,11]
console.log(vetores(vetor))