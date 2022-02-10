let pontos = "10, 20, 20, 8, 25, 3, 0, 30, 1"

function score(pontos) {
    let pontuacao = pontos.split(", ")
    return pontuacao   
}

console.log(score(pontos))

const ponto = [10, 20, 20, 8, 25, 3, 0, 30, 1]
function score2(ponto) {
    return ponto
}

console.log(score2(ponto))