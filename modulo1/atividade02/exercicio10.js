// Combinação de Estruturas
// 10. Criando Relatórios com Objetos e Arrays
// • Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.

let sales = [
    {product: 'Asipirador de Pó', quantity: 10, price: 150.00},
    {product: 'Luminaria', quantity: 5, price: 55.00},
    {product: 'Lampadas', quantity: 40, price: 3.90},
    {product: 'Chave de Fenda', quantity: 2, price: 30.00},
    {product: 'Desengripante', quantity: 5, price: 15.39},
    {product: 'Cabideiro', quantity: 5, price: 65.00},
  ]
  
  let totalSaleValue = 0
  
  sales.forEach(sale => {
    let saleTotalValue = sale.quantity * sale.price
    console.log(`
  Produto: ${sale.product}
  Quantidade vendida: ${sale.quantity}
  Preço por item: ${sale.price.toFixed(2)}
  Total do item vendido: R$ ${saleTotalValue.toFixed(2)}
    `)
    totalSaleValue += saleTotalValue
  })
  
  console.log(`
  Total de vendas no dia: R$ ${totalSaleValue.toFixed(2)}
  `)