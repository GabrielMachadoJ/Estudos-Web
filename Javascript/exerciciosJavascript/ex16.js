function calc(num1, num2, opereacao) {
    switch(opereacao){
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*': 
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return "Operação inválida"
    }
}

console.log(calc(2, 3, '+'))
console.log(calc(2, 3, '-'))
console.log(calc(2, 3, '*'))
console.log(calc(20, 2, '/'))
console.log(calc(2, 3, 'teste'))