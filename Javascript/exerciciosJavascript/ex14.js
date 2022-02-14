function frutinha(fruta) {
    switch(fruta) {
        case "maça":
            return "Não vendemos esta fruta aqui"
        case "kiwi":
            return "Estamos com escassez de kiwis"
        case "melancia":
            return "Aqui está, são 3 reais o quilo"
        default:
            return "Fruta invalida"
    }
}

console.log(frutinha("maça"))
console.log(frutinha("kiwi"))
console.log(frutinha("melancia"))
console.log(frutinha("pera"))