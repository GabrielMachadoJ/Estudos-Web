Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha' , 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indece, array) {
    console.log(`${indece + 1}) ${nome}`)
    console.log(array)
})
