// Manipulação de Arrays de Objetos com for of
// 5. Calculando Valores em Arrays de Objetos
// • Objetivo: Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.

let students = [
    {name: 'Matheus', grade1: 7, grade2: 5},
    {name: 'Ivan', grade1: 8, grade2: 6},
    {name: 'Itamir', grade1: 9, grade2: 8},
    {name: 'Paulo', grade1: 5, grade2: 2},
    {name: 'Silvano', grade1: 6, grade2: 4},
  ]
  
  for (let student of students){
    let avgGrade = (student.grade1 + student.grade2) / 2
    student.finalGrade = avgGrade
    
    if (avgGrade >= 7){
      student.status = 'Aprovado!'
    } else if (avgGrade >= 5){
      student.status = 'Em recupeção!'
    } else {
      student.status = 'Reprovado!'
    }
    console.log(`
      Notas de ${student.name}
      Avaliação 1: ${student.grade1}
      Avaliação 2: ${student.grade2}
      Média: ${avgGrade}
      Status: ${student.status}
    `)
  }