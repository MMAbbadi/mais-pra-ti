// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

let prompt = require(`prompt-sync`)()
let firstNum = +prompt(`Digite um numero a ser somado:`)
let soma = 0

soma += firstNum

for (let i = 0; i < 4; i++){
    let num = +prompt(`Digite mais um numero a ser somado ao anteriror: `)
    
    if (isNaN(firstNum)){
        console.error(`Valor invalido, operacao abortada!`)
        break
    } else {
        soma += num    
    }
}

console.log(soma)