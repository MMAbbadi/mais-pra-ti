// Combinação de Estruturas
// 13. Implementando um Carrinho de Compras
// • Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.

let cart = {
    items: [
      {product: 'Arroz', quantity: 2, unitPrice: 6.00},
      {product: 'Feijao', quantity: 2, unitPrice: 9.00},
      {product: 'Limão', quantity: 6, unitPrice: 1.90},
      {product: 'Pão', quantity: 6, unitPrice: 0.59}
    ]
  }
  
  let totalPrice = 0
  
  cart.items.forEach(item => {
    totalPrice += item.unitPrice * item.quantity
  })
  
  console.log(`Total da compra: ${totalPrice}`)