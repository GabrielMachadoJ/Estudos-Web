function teste1(num) {
    if(num > 7)
        console.log(num)
    console.log('Final') //como não tem colchetes ele executa somente a primeira linha, no caso dessa ela sempre vai ser executada mesmo se o numero for menor que 7
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // cuidado com o ; não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)