// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let prompt = require(`prompt-sync`)()
let num = +prompt(`Digite um numero para ser impresso 10 vezes: `)
let i = 0

while (i !== 10){
    console.log(num)
    i++
}
console.log(`Numero impresso ${i} vezes`)