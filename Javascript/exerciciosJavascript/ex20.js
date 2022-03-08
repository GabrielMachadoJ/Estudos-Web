function quantasNotas(dinheiro) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = saberValorNota(dinheiro)
    while (dinheiro >= valorNota){
        switch(valorNota) {
            case 100: 
                dinheiro -= 100
                contador100 ++
                break
            case 50: 
                dinheiro -= 50
                contador50 ++
                break
            case 10: 
                dinheiro -= 10
                contador10 ++
                break
            case 5: 
                dinheiro -= 5
                contador5 ++
                break
            case 1: 
                dinheiro -= 1
                contador1 ++
                break
        }
        valorNota = saberValorNota(dinheiro)

    }
    
   return retorno(contador100, contador50, contador10, contador5, contador1)
}

function saberValorNota(dinheiro) {
    if(dinheiro >= 100) {
        return 100
    }else if(dinheiro >= 50) {
        return 50
    }else if(dinheiro >= 10){
        return 10
    }else if(dinheiro >= 5){
        return 5
    }else if(dinheiro >= 1){
        return 1
    }
}

function retorno(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ' '

    if(contador100 > 0){
         resultado += `${contador100} nota(s) de 100`
    } if(contador50 > 0) {
         resultado += ` ${contador50} nota(s) de 50`
    } if(contador10 > 0) {
         resultado += ` ${contador10} nota(s) de 10`
    } if(contador5 > 0) {
         resultado += ` ${contador5} nota(s) de 5`
    } if(contador1 > 0) {
         resultado += ` ${contador1} nota(s) de 1`
    }

    return resultado
}



console.log(quantasNotas(300))
console.log(quantasNotas(323))