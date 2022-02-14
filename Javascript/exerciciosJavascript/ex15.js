function revenda(modelo) {
    switch(modelo){
        case "hatch":
            return "Compra efetuada com sucesso"
        case "sedans":
        case "motocicletas":
        case "caminhonetes":
            return "Tem certeza que não prefere este modelo?"
        default:
            return "Não trabalhamos com este tipo de automóvel aqui."
    }
}

console.log(revenda('hatch'))
console.log(revenda('sedans'))
console.log(revenda('motocicletas'))
console.log(revenda('caminhonetes'))
console.log(revenda('uno'))