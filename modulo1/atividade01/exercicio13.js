// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.
let prompt = require(`prompt-sync`)()
let soma = 0
let counter = 0
let num

do {
    num = parseFloat(prompt(`Digite um valor para ser somado (para sair, digite 0):`))
    if (num !== 0){
        soma += num
        counter++
    }
} while (num !== 0)

if (counter > 0){
    let media = soma / counter
    console.log(`A media dos valores inseridos e: ${media}`)
} else {
    console.log(`Nenhum dos valores inseridos e valido!`)
}