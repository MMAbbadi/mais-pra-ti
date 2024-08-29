// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.
let prompt = require(`prompt-sync`)()
let num = +prompt(`Digite um valor para saber o valor fatorial dele: `)
let counter = 1

if(isNaN(num)){
    console.log(`Valor digitado e invalido!`)
} else {
    console.log(`Realizando calculo fatorial de ${num}`)
    while(num > 0){
        counter *= num
        num--
    }
    setTimeout(()=>{
        console.log(`Resultado: ${counter}`)    
    }, 2000)    
}