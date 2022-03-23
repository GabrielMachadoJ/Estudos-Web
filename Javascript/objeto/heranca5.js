console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log("teste".reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(["c", 2, 3, 4, 5].first())


// não fazer isso
String.prototype.toString = function () {
    return 'Lascou'
}

console.log('Escola'.reverse())