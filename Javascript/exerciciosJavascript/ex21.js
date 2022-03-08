function planoSaude(idade) {
    let custoNovo = 0 
    if(idade < 10){
        custoNovo = 80 + 100
        return `Vai pagar R$ ${custoNovo}` 
    } else if (idade >= 10 && idade < 30 ) {
        custoNovo = 50 + 100
        return `Vai pagar R$ ${custoNovo}`
    } else if (idade >= 30 && idade <= 60){
        custoNovo = 95 + 100
        return `Vai pagar R$ ${custoNovo}`
    } else if (idade > 60) {
        custoNovo = 130 + 199
        return `Vai pagar R$ ${custoNovo}`
    }
}

console.log(planoSaude(61))

// function calcularPreco (idade) {
//     if(idade < 10){
//         return 180
//     } else if(idade < 30) {
//         return 150
//     } else if (idade < 60) {
//         return 195
//     } else {
//         return 230
//     }
// }