// Manipulação de Arrays de Objetos com forEach
// 9. Contabilizando Elementos com uma Condição
// • Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.

let clients = [
    {name: 'Matheus', age: 25, city: 'Porto Alegre'},
    {name: 'Paloma', age: 37, city: 'Sicilia'},
    {name: 'Giovana', age: 27, city: 'São Jeronimo'},
    {name: 'Rian', age: 48, city: 'Porto Seguro'},
    {name: 'Marcelo', age: 53, city: 'Diadema'},
    {name: 'Rafaela', age: 15, city: 'Diadema'},
    {name: 'Renan', age: 23, city: 'Santa Maria'},
    {name: 'Renata', age: 18, city: 'Blumenau'},
    {name: 'Marcia', age: 32, city: 'Florianopolis'},
    {name: 'Evelyn', age: 43, city: 'Montes Claros'},
    {name: 'Janaina', age: 38, city: 'Belo Horizonte'},
    {name: 'Enzo', age: 19, city: 'Paraiba'},
  ]
  
  let count = 0
  
  clients.forEach(client => {
    if (client.age > 30 ){
      count++
    }
  })
  
  console.log(`
  Numero de clientes acima de 30 anos: ${count}
  `)