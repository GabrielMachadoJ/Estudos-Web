const conta = function (dividendo, divisor) {
    const divisao = dividendo / divisor
    const resto = dividendo % divisor
    console.log(`A divisão é ${divisao} e o resto é ${resto}`)
}

conta(25,10)