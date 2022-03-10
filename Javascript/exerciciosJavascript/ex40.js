function conceito (vetorNota) {
    let conceitoA = "Conceito A: "
    let conceitoB = "Conceito B: "
    let conceitoC = "Conceito C: "
    let conceitoD = "Conceito D: "
    for(let i = 0; i < vetorNota.length; i++) {
        if(vetorNota[i] >= 0 && vetorNota[i] <5){
            conceitoD += vetorNota[i] 
        } else if(vetorNota[i] >= 5 && vetorNota[i] < 7 ) {
            conceitoC += vetorNota[i]
        } else if(vetorNota[i] >= 7 && vetorNota[i] < 9 ) {
            conceitoB += vetorNota[i]
        } else if(vetorNota[i] >= 9 && vetorNota[i] <= 10) {
            conceitoA += vetorNota[i]
        } else {
            return "alguma coisa ta errada"
        }
    }
    return ` 
             ${conceitoA}
             ${conceitoB}
             ${conceitoC}
             ${conceitoD}`
}

let vetor = [1 , 6, 8, 9.6, 9]
console.log(conceito(vetor))