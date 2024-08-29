// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

let prompt = require('prompt-sync')()
let age = +prompt('Digite sua idade: ')

if (age < 0 || age > 110 ){
    console.error('Idade inserida invalida!')
} else if (age > 0 && age < 12) {
    console.log(`Voce e uma Crianca!`)
} else if (age >= 12 && age < 18) {
    console.log('Voce e um Adolescente!')
} else if (age >= 18 && age < 65){
    console.log(`Voce e um Adulto!`)
} else {
    console.log(`Voce e um Idoso`)
}