// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let prompt = require(`prompt-sync`)()
let applesToBuy = +prompt(`Quantas macas vais comprar?`)
let resultado

if (isNaN(applesToBuy)){
    console.error(`Valor Invalido!`)
} else if (applesToBuy < 6) {
    resultado = applesToBuy * 0.30
    console.log(`Valor total da compra: ${resultado.toFixed(2)}`)
} else {
    resultado = applesToBuy * 0.25
    console.log(`Valor total da compra: ${resultado.toFixed(2)}`)
}