// Combinação de Estruturas
// 12. Atualizando um Array de Objetos
// • Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

let stock = [
    {product: 'Prato fundo', quantity: 10, minimal: 20},
    {product: 'Facas', quantity: 8, minimal: 10},
    {product: 'Garfos', quantity: 8, minimal: 10},
    {product: 'Copos', quantity: 10, minimal: 10},
  ]
  
  
  console.log(`
  Lista de produtos:
  ${JSON.stringify(stock, null, 2)}
  `)
  
  stock.forEach(item => {
    if(item.quantity < item.minimal){
      item.quantity = item.quantity * 2
      console.log(`
      Comprando mais produto: 
      Produto: ${item.product}
      Quantidade Atualizada: ${item.quantity}
      Mínimo Necessário: ${item.minimal}
      `)
    }
  })
  
  console.log(`
  Inventario depois da reposição:
  ${JSON.stringify(stock, null, 2)}
  `)