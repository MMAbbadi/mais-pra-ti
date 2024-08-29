// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.
let prompt = require(`prompt-sync`)()
console.log(``)
let operation = prompt(`Seleciona uma operacao para ser realizada: (Utilize as seguintes notacoes: \n1) Adicao: + \n2) Subtracao: -) \n3)Multiplicacao: * \n`)

switch (operation){
    case `+`:
        console.log(`Operacao selecionada: Soma`)
        let num1 = +prompt(`Digite o primeiro numero: `)
        let num2 = +prompt(`Digite o segundo numero: `)
        let resultado1 = num1 + num2
        if (isNaN(num1) || isNaN(num2)){
            console.error(`Um ou mais valores sao invalidos!`)
        } else {
            console.log(`O valor da soma de ${num1} e ${num2} e: ${resultado1}`)
        }
        break

    case `-`:
        console.log(`Operacao selecionada: Subtracao`)
        let num3 = +prompt(`Digite o primeiro numero: `)
        let num4 = +prompt(`Digite o segundo numero: `)
        let resultado2 = num3 - num4
        if (isNaN(num3) || isNaN(num4)){
            console.error(`Um ou mais valores sao invalidos!`)
        } else {
            console.log(`O valor da soma de ${num3} e ${num4} e: ${resultado2}`)
        }
        break

    case `*`:
        console.log(`Operacao selecionada: Multiplicacao`)
        let num5 = +prompt(`Digite o primeiro numero: `)
        let num6 = +prompt(`Digite o segundo numero: `)
        let resultado3 = num5 * num6
        if (isNaN(num5) || isNaN(num6)){
            console.error(`Um ou mais valores sao invalidos!`)
        } else {
            console.log(`O valor da soma de ${num5} e ${num6} e: ${resultado3}`)
        }
        break

    default:
        console.error(`Operacao invalida!`)
        break
}