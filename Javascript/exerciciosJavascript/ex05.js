function aredonda (valor) {
    console.log(`R$${valor.toFixed(2).replace(".", ",")}`)
}

aredonda(0.1 + 0.2)