function notas(nota) {
    let nota5 = Math.ceil(nota / 5) * 5 
    if(nota < 38) {
        return "aluno reprovado com a nota " + nota
    } else if(nota5 - nota == 2 || nota5 - nota == 1){
        return "Aluno Aprovado com a nota " + nota5
    } else {
        return "Aluno Aprovado com a nota " + nota
    }
}

console.log(notas(100))
console.log(notas(30))
console.log(notas(38))
console.log(notas(88))
console.log(notas(61))

