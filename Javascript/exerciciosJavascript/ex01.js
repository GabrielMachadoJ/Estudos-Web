function calc (valorA, valorB) {
    let Soma = valorA + valorB
    let sub = valorA - valorB
    let mult = valorA * valorB
    let div = valorA / valorB

    console.log(`
    A soma é : ${Soma}
    A sub é: ${sub}
    A mult é: ${mult}
    A div é: ${div}`)
}

calc(10, 2)