let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(vetorInicial, vetorFinal) {
    
    for(let i = 0; i < vetorFinal.length; i++) {
        console.log(vetorFinal[i])
        vetorInicial.push(vetorFinal[i])
    }
    console.log('Vetor adicionado: ' + vetorFinal)
    console.log('Vetor resultado: ' + vetorInicial)
}

adicionaVetor(vetorPilha, vetorAdiciona)