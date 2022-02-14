function restaurante(codigo, qtd) {
    switch(codigo){
        case 100: return qtd * 3
        case 200: return qtd * 4
        case 300: return qtd * 5.5
        case 400: return qtd * 7.5
        case 500: return qtd * 3.5
        case 600: return qtd * 2.8
        default: return "Produto não existente"
    }
}

console.log(restaurante(100, 3))
console.log(restaurante(200, 3))
console.log(restaurante(300, 3))
console.log(restaurante(400, 3))
console.log(restaurante(500, 3))
console.log(restaurante(600, 3))
console.log(restaurante(700, 3))