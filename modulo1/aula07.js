//<Variavel>; <condição>; <incremento>
let prompt = require('prompt-sync')()

// let multi = Number(prompt("Numero para ser multiplicado: "))

// for(let i = 0; i <= 10; i+=2){
//     console.log(`${multi} * ${i} = `, multi * i)
// }


// Calcular a soma dos numeros de 1 a 100
// let soma = 0;

// for(let i = 0; i <= 100; i++){
//     soma+=i;
// }
// console.log(soma)


// Imprimir valores de 1 a 10 em ordem decrescente
// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

// Calcular a soma dos numeros de 1 a 100
// let i = 0
// let soma = 0
// while(i <= 100){
//     soma+=i;
//     i++;
// }

// console.log(soma);
let sair = 0
let num1 = Number(prompt("Digite um valor: "))

while(num1 !== sair){
    let num2 = Number(prompt("Digite 0 para sair do loop!\n Digite um novo valor:"))
    if (num2 !== sair){
        console.log("Não saiu do loop!")
    }else{
        break
    }
}
console.log("Você saiu do loop!")