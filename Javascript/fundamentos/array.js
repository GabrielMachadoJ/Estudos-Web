 const valores = [7.7, 8.9, 6.3, 9.2, 'batata']
 console.log(valores)
 console.log(valores[0], valores[4])
 console.log(valores[5])

 valores[5] = 'alguma coisa'
 console.log(valores)

 valores[8] = 1
 console.log(valores)

 console.log(valores.length)

 valores.push({id: 3}, false, null, 'teste')
 console.log(valores)

 console.log(valores.pop())
 delete valores[0]
 console.log(valores)
 
 console.log(typeof valores)