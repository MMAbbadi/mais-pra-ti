// Combinação de Estruturas
// 14. Manipulando Objetos Complexos
// • Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.

let enterprise = {
    departments: [
      { financeiro: {
          employees: ['Marcio', 'Paloma', 'Silvia', 'Laércio']
        }
      },
      { vendas: { 
          employees: ['Cristian', 'Livia', 'Joel']  
        }
      }
    ]
  }
  
  for (let department of enterprise.departments){
    for (let departmentName in department){
      let employees = department[departmentName].employees
      console.log(`Departamento: ${departmentName}`);
      for (let employee of employees) {
        console.log(`  Funcionário: ${employee}`);
      }
    }
  }