function eBisexto(ano) {
    if(ano <= 0){
        return false
    }else if(ano % 400 === 0){
        return true
    }else if(ano % 100 === 0 ){
        return false
    }else if(ano % 4 === 0){
        return true
    } else {
        return false
    }
}

console.log(eBisexto(400))
console.log(eBisexto(500))
console.log(eBisexto(600))
console.log(eBisexto(800))
console.log(eBisexto(1200))
console.log(eBisexto(2000))