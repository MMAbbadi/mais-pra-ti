// Manipulação de Arrays de Objetos com forEach
// 7. Modificando Objetos em um Array
// • Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.

let products = [
    {name: 'Aspirador de Pó', price: 150.27, discount: 5},
    {name: 'Geladeira Electrolux', price: 1500.10, discount: 8},
    {name: 'Cama Casal', price: 930.99, discount: 3},
    {name: 'Computador Multilaser', price: 2500.50, discount: 8},
  ]
  
  products.forEach(product => {
    console.log(`
      Pré Desconto:
      Produto: ${product.name},
      Preço: ${product.price},
      Desconto: ${product.discount}%
    `)
  
    product.discount = 10
    let newPrice = product.price - (product.price * (product.discount / 100))
    product.price = newPrice.toFixed(2)
  
    console.log(`
      Pós Desconto:
      Produto: ${product.name},
      Preço: ${product.price},
      Desconto: ${(product.discount / 100) * 100}%
    `)
  })