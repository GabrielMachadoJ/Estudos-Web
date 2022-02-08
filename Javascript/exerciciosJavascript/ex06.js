function jurosSimples (capIni, txJuros, tempo) {
    const juros = capIni * (txJuros / 100) * tempo
    const montante = capIni + juros

    return montante
}

console.log(jurosSimples(1200, 2, 14))

function jurosCompostos (capIni, txJuros, tempo) {
    const montante = capIni * (1 + (txJuros / 100)) ** tempo
    return montante
}

console.log(jurosCompostos(620, 1.5, 24))