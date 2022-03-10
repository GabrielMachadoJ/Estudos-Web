function verificaIgual(string1, string2) {
    let tem = true
    for(let i = 0; i < string1.length; i++) {
        let seperaString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++) {
            let seperaString2 = string2.charAt(j).toLowerCase()

            if(seperaString1 == seperaString2) {
                tem = true
                break
            } else {
                tem = false
            }
        }
        if(!tem) {
            return tem
        }
    }
    return tem
    
}

console.log(verificaIgual('subino', 'onibus'))