let pontos = "10, 20, 20, 8, 25, 3, 0, 30, 1"

function score(pontos) {
    let pontuacao = pontos.split(", ")
    let record = 0
    let piorJogo = 1
    let maiorPonto = pontuacao[0]
    let menorPonto = pontuacao[0]
    

    for(let i = 1; i < pontuacao.length; i++){
        if(Number(pontuacao[i]) > Number(maiorPonto)) {
            maiorPonto = pontuacao[i]
            record++
        } else if(Number(pontuacao[i]) < Number(menorPonto)) {
            menorPonto = pontuacao[i]
            piorJogo = i + 1

        }
    }
    return [record, piorJogo]
}

console.log(score(pontos))
