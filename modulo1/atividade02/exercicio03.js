// Manipulação de Objetos
// 2. Verificando Propriedades
// • Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let book = {
    title: 'Dummies',
    author: 'Stephen King',
    yearRelease: 2022,
    genre: 'Thriller'
  }
  
  let hasPublisher = false
  
  for (let chars in book){
    if (chars === 'publisher'){
      hasPublisher = true
      break
    }
    console.log(`
      ${chars}: ${book[chars]}
    `)
  }
  
  if (!hasPublisher){
    book.publisher = 'Darkside'
  }
  
  console.log(' ')
  
  for (let chars in book){
    console.log(`
    ${chars}: ${book[chars]}
    `)
  }