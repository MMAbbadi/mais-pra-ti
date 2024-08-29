// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
let prompt = require(`prompt-sync`)()
let multiNum = +prompt(`Digite um numero para saber a tabuada: `)
let resultado
for (let i = 1; i <= 10; i++){
    resultado = multiNum * i
    console.log(`${multiNum} x ${i} = ${resultado}`)
}
