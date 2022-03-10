function media(vetor) {
    let dividendo = 0
    let media = 0

    for(let i = 0; i < vetor.length; i++) {
        dividendo += vetor[i]
    }

    media = dividendo / vetor.length
    return `A média é ${media}`
    
}

vetor = [1, 2, 3, 4, 5]

console.log(media(vetor))