function anuidade(mes, valorAnuidade) {
    let novoValor = 0
    switch(mes) {
        case 1:
            return `Valor a pagar em Janeiro R$ ${valorAnuidade}`
            break
        case 2:
            novoValor = valorAnuidade * (1 + 0.05) ** 1
            return `Valor a pagar em Fevereiro R$ ${novoValor}`
            break
        case 3:
            novoValor = valorAnuidade * (1 + 0.05) ** 2
            return `Valor a pagar em março R$ ${novoValor}`
            break
        case 4:
            novoValor = valorAnuidade * (1 + 0.05) ** 3
            return `Valor a pagar em Abril R$ ${novoValor}`
            break
        case 5:
            novoValor = valorAnuidade * (1 + 0.05) ** 4
            return `Valor a pagar em Maio R$ ${novoValor}`
            break
        case 6:
            novoValor = valorAnuidade * (1 + 0.05) ** 5
            return `Valor a pagar em Junho R$ ${novoValor}`
            break
        case 7:
            novoValor = valorAnuidade * (1 + 0.05) ** 6
            return `Valor a pagar em Julho R$ ${novoValor}`
            break
        case 8:
            novoValor = valorAnuidade * (1 + 0.05) ** 7
            return `Valor a pagar em Agosto R$ ${novoValor}`
            break
        case 9:
            novoValor = valorAnuidade * (1 + 0.05) ** 8
            return `Valor a pagar em Setembro R$ ${novoValor}`
            break
        case 10:
            novoValor = valorAnuidade * (1 + 0.05) ** 9
            return `Valor a pagar em Outubro R$ ${novoValor}`
            break
        case 11:
            novoValor = valorAnuidade * (1 + 0.05) ** 10
            return `Valor a pagar em Novembro R$ ${novoValor}`
            break
        case 12:
            novoValor = valorAnuidade * (1 + 0.05) ** 11
            return `Valor a pagar em Dezembro R$ ${novoValor}`
            break
        default : return "Mês invalído"
    }
}

console.log(anuidade(4, 100))


// function calcularValor(mes, valor){
//     if(mes > 0 && mes < 13) {
//         atraso = mes - 1
//         return (valor * ((1 + (5/100))**atraso)).toFixed(2)
//     } else {
//         return 'Mês inválido.'
//     }
// }

// console.log(calcularValor(4, 100))