const testando = "abcdefg"

console.log(testando.charAt(3))
console.log(testando.charAt(9))
console.log(testando.charCodeAt(3)) 
console.log(testando.indexOf('g'))

console.log(testando.substring(1))
console.log(testando.substring(1, 4))

console.log('O alfabeto começa assim ('.concat(testando).concat(') entendeu?'))
console.log('O alfabeto começa assim (' + testando +') entendeu?')
console.log(testando.replace('d', '2222'))

console.log('Ana,Maria,Pedro'.split(','))

console.log('Ana,Maria,Pedro'.split('a'))