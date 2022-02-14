function salarioNovo(plano, salario) {
    switch(plano) {
        case 'a':
            return salario + (salario * 0.10)
        case 'b':
            return salario + (salario * 0.15)
        case 'c':
            return salario + (salario * 0.20)
        default:
            return "Plano inválido"
    }
}

console.log(salarioNovo('a', 1000))
console.log(salarioNovo('b', 1000))
console.log(salarioNovo('c', 1000))
console.log(salarioNovo('d', 1000))