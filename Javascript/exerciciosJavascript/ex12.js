// Utilizando for
function fatorial(num) {
    let resultado = 1

    for(let i = 1; i <= num; i++){
        resultado *= i 
    }
    return resultado
}

console.log(fatorial(10))

// Outra forma

function fatorialSimples(numero){
    if(numero == 0){
        return 1
    } else {
        return numero * fatorialSimples(numero - 1)
    }
}

console.log(fatorialSimples(5))