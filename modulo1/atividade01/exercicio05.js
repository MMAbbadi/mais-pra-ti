//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

let prompt = require(`prompt-sync`)()

let height = +prompt(`Digite sua altura (em cm): `)
let wieght = +prompt(`Digite seu peso (em Kg): `)

let _IMC = wieght / ((height / 100) * 2) 

if (_IMC < 18.00) {
    console.log(`Risco: subnutricao`)
} else if (_IMC >= 18.00 && _IMC < 25.00){
    console.log(`Peso normal!`)
} else if (_IMC >= 25.00 && _IMC < 30.00){
    console.log(`Sobre peso!`)
} else if (_IMC >= 30.00 && _IMC < 35.00){
    console.log(`Risco: Obesidade Grau 1!`)
} else if (_IMC >= 35.00 ){
    console.log(`Risco: Obesidade Grau 2!`)
} else {
    console.log(`Valor invalido`)
}