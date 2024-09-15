// Combinação de Estruturas
// 11. Agrupando Elementos com forEach
// • Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.

let orders = [
    {product: 'Video Game', client: 'Matheus', quantity: 2},
    {product: 'Console', client: 'Matheus', quantity: 1},
    {product: '4k Monitor', client: 'Matheus', quantity: 2},
    {product: 'Massa Bolonhesa', client: 'Fabricio', quantity: 1},
    {product: 'Hamburguer', client: 'Fabricio', quantity: 1},
    {product: 'Queijo Ralado', client: 'Fabricio', quantity: 2},
  ]
  
  let clients = []
  
  orders.forEach(order => {
    if (!clients[order.client]){
      clients[order.client] = 0
    }
    clients[order.client] += order.quantity
  })
  
  for (let client in clients) {
    console.log(`
    Pedidos de ${client}: ${clients[client]}
    `)
  }
  