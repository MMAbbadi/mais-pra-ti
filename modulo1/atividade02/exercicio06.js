// Manipulação de Arrays de Objetos com for of
// 6. Filtrando Arrays de Objetos
// • Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.

let employees = [
    {name: 'Matheus', position: 'Auxiliar Comercial', wage: 1500},
    {name: 'Brenda', position: 'Assistente Administrativa', wage: 1600},
    {name: 'Paula', position: 'Contabilidade', wage: 2700},
    {name: 'Itamar', position: 'Mecanico Chefe', wage: 3500},
    {name: 'Anderson', position: 'Vendedor', wage: 7500},
    {name: 'Rudolf', position: 'CEO', wage: 10000},
  ]
  
  let upperWage = []
  
  for (let employee of employees){
    if (employee.wage > 2000){
      upperWage.push(employee)
    }
  }
  
  console.log(upperWage)
  
  //ou também
  
  let highestWage = employees.filter(employee => employee.wage > 2000)
  
  for (let employee of highestWage){
      console.log(employee)
  }