// const professor ={
//     name: 'Ademir',
//     subject: 'Matemática',
//     grades: {
//         student1: 10.0,
//         student2: 5.0,
//         student3: 8.0,
//         student4: 9.0,
//         student5: 1.0,
//         student6: 4.0,
//         student7: 7.0
//     }

// }

// let sumGrades = 0;
// let studentCount = 0;

// for (let student in professor.grades){
//     sumGrades += professor.grades[student]
//     studentCount++

// }

// let avGrades = sumGrades / studentCount

// if (avGrades >= 3){
//     console.log(`A média da turma é ${avGrades}, \nProfessor ${professor.name} aprovado!`)
// } else {
//     console.log(`Média da turma: ${avGrades}, \nProfessor ${professor.name} reprovado!`)
// }

//-------------------------------------------------------------------------------------------------
//LIVROS EM BIBLIOTECA
// let biblioteca = {
//     nome: 'Biblioteca Municipal de Porto Alegre',
//     books: {
//         livro1: {
//             nome: 'Harry Potter',
//             ano: 2007
//         },
//         livro2: {
//             nome: 'Sherlock Holmes',
//             ano: 2013
//         },
//         livro3: {
//             nome: 'Dummies',
//             ano: 2024
//         },
//         livro5: {
//             nome: 'Capitães de Areia',
//             ano: 1994
//         },
//         livro6: {
//             nome: 'Coração de Tinta',
//             ano: 1992
//         },

//     }
// }
// let livroAnos2000 = []
// let livroAnos19xx = []
// for (let book in biblioteca.books){
//     let ano = biblioteca.books[book].ano
//     if (ano >= 2000){
//         livroAnos2000.push(biblioteca.books[book])
//     } else {
//         livroAnos19xx.push(biblioteca.books[book])
//     }
// }
// console.log(livroAnos2000)

//-------------------------------------------------------------------------------------------------
//Generos Filmes
// let movies = [
//     {name: 'Harry Potter', genero:'Fantasia', ano: 2002},
//     {name: 'Se beber Não Case', genero:'Comedia', ano: 2012},
//     {name: 'Cidade de Deus', genero:'Acao', ano: 2004},
//     {name: 'Harry Potter 2', genero:'Fantasia', ano: 2006},
//     {name: 'Vingadores', genero:'Acao', ano: 2014},
//     {name: 'Origem', genero:'Ficcao', ano: 2010},
//     {name: 'Star Wars', genero:'Ficcao', ano: 1976},
//     {name: 'Encarando Gigantes', genero:'Drama', ano: 2008},
//     {name: 'Diamante Bruto', genero:'Drama', ano: 2018},
//     {name: 'Smiley', genero:'Terror', ano: 2016},
//     {name: 'Jogo da Imitação', genero:'Documentario', ano: 2015},
// ]

// let genreCount = {}

// movies.forEach(movie=> {
//     if (genreCount[movie.genero]){
//         genreCount[movie.genero]++
//     } else {
//         genreCount[movie.genero] = 1
//     }
//     // console.log(genreCount)
// }); for (let genero in genreCount) {
//     console.log(`Existem ${genreCount[genero]} filmes do genero ${genero}`)
// }
// console.log(genreCount)