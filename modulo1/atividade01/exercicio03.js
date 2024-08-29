//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
let prompt = require(`prompt-sync`)()
let grade = +prompt(`Digite a nota do aluno: `)

if (isNaN(grade)){
    console.log(`Nota invalida!`)
} else if (grade >= 7 && grade <= 10){
    console.log(`Aluno aprovado!`)
} else if (grade < 7 && grade > 4){
    console.log(`Aluno em recuperacao!`)
} else {
    console.log(`Aluno reprovado!`)
}