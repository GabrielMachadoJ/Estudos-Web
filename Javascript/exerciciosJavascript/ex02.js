function triangulo (ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB == ladoC) {
        console.log('É um triângulo equilátero')
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        console.log('É um triângulo isósceles')
    } else {
        console.log('É um triângulo escaleno')
    }
}

triangulo(2, 4, 3)
triangulo(2, 3, 2)
triangulo(2, 2, 2)