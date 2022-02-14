function diaUtil(dia) {
    switch(dia) {
        case 1:
           return "Final de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia útil"
        case 7:
            return "Final de semana"
        default:
            return "Número invalido"
    }
}

console.log(diaUtil(2))
console.log(diaUtil(7))