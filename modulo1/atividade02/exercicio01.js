// Manipulação de Objetos
// 1. Acessando Propriedades de Objetos
// • Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console.

let car = {
    model: 'Civic',
    brand: 'Honda',
    year: 2016,
    color: 'Prata'
  }
  
  for (let chars in car){
    console.log(`
      ${chars}: ${car[chars]}
    `)
  }