function diviPorTres(num) {
    let inteiro = Math.floor(num)
    if(inteiro % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(diviPorTres(6))