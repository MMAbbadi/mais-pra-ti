// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

let prompt = require(`prompt-sync`)()
let a = +prompt(`Digite um lado do triangulo: `)
let b = +prompt(`Digite um outro lado do triangulo: `)
let c = +prompt(`Digite o ultimo lado do triangulo: `)

if (isNaN(a) || isNaN(b) || isNaN(c)){
    console.error(`Valor invalido!`)
} else if (a + b <= c || b + c <= a || c + a <= b){
    console.error(`Valores inseridos nao configuram um triangulo!`)
} else if (a === b && b === c){
    console.log(`Valores informados configuram um Triangulo Equilatero!`)
} else if (a === b || b === c || c === a){
    console.log(`Valores informados configuram um Triangulo Isosceles!`)
} else{
    console.log(`Valores todos diferentes configuram um Triangulo Escaleno!`)
}