// Manipulação de Arrays de Objetos com forEach
// 8. Criando Novos Arrays a Partir de Objetos
// • Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.
let movies = [
    {title: 'Duna', director: 'Denis Villeneuve', release: 2021},
    {title: 'Blade Runner', director: 'Ridley Scott', release: 1982},
    {title: 'Oppenheimer', director: 'Christopher Nolan', release: 2023},
    {title: 'Poor Things', director: 'Yorgos Lanthimos', release: 2023},
    {title: 'Parasite', director: 'Bong Joon-ho', release: 2019}
  ]
  
  let moviesTitle = []
  
  movies.forEach(movie => {
    moviesTitle.push(movie.title)
  })
  console.log(moviesTitle)