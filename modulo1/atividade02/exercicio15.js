// Combinação de Estruturas
// 15. Filtrando e Somando Valores ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.

let transactions = [
    {type: 'entrada', value: 1500},
    {type: 'saida', value: 350},
    {type: 'saida', value: 150},
    {type: 'saida', value: 75},
    {type: 'entrada', value: 200},
    {type: 'saida', value: 80},
    {type: 'saida', value: 1055},
  ]
  
  
  let bankValue = 1000
  console.log(`Valor pré movimentações: R$ ${bankValue.toFixed(2)}`)
  
  
  transactions.forEach(transaction => {
    if (transaction.type === "entrada"){
      bankValue += transaction.value
    } else if (transaction.type === "saida"){
      bankValue -= transaction.value 
    }
  })
  
  console.log(`Saldo pós movimentações: R$ ${bankValue.toFixed(2)}`)