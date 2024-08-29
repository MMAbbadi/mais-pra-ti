// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

let prompt = require(`prompt-sync`)()
let val1 = +prompt(`Digite um valor a ser organizado: `)
let val2 = +prompt(`Digite um valor a ser organizado (Nao inserir um valor igual ao anterior): `)
let arr = []

if (isNaN(val1) || isNaN(val2)){
    console.error(`Valor inserido invalido`)
} else if (val1 === val2){
    console.error(`Valores identicos, favor inserir valores diferentes um do outro!`)
} else if (val1 < val2){
    arr.push(val1)
    arr.push(val2)
    console.log(arr)
} else {
    arr.push(val2)
    arr.push(val1)
    console.log(arr)
}

