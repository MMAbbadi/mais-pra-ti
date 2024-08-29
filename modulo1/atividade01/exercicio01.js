// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

let prompt = require('prompt-sync')()
let reqNum = +prompt('Digite um numero para descobrir se é par ou impar:')

if(isNaN(reqNum)){
    console.error('Valor inserido invalido!')
} else if (reqNum % 2 === 0) {
    console.log('Numero Par!')
} else {
    console.log('Valor Impar!')
}