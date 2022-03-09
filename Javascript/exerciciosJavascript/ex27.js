function comparaCrianca(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if(taxa1 > taxa2) {
            return 'Criança 1 passara a 2 em 1 ano'

        } else if(taxa1 < taxa2){
            return 'Criança 2 passara a 1 em 1 ano'
        } else {
            return 'Os dois tem o mesmo tamanho'
        }
    } else {
        if(altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor vai continuar menor'
            } else {
                return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos`
            }
        }
    }
}


function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    return qtdAnos
}

console.log(comparaCrianca(150, 2, 130, 4));