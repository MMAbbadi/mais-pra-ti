// SIMPLE USERAUTH
// let usuario = "Zwytam"
// let senha = "123456"

// const autenticUsuario = () =>{
//     if (usuario === "Zwytam" && senha === "123456"){
//         console.log("Você Logou")
//     }else{
//         console.log("Usario e senha invalidos!")
//     }
// }

// autenticUsuario();


// VERIFICANDO NOTA
// const grade = 60;

// if(grade >= 60){
//     console.log('Aluno Aprovado!')
// }else{
//     console.log('Aluno Reprovado!')
// }


// VERIFICANDO IDADE 
const idade = 18

// const verAge = () => {
//     if (18 <= idade >= 64){
//         console.log("Cadastro Aprovado!")
//     }else if(idade <= 17){
//         console.log("Participante muito novo!")
//     }else{
//         console.log("Participante muito velho!")
//     }

// }

// verAge();

// TERNARY OPERATOR
// let tern = (18 <= idade >= 64) ? console.log("Cadastro Aprovado!") : console.log("Cadastro Reprovado!");
// console.log(tern)

// Exercicio 1: VERIFICAR NUMERO PAR OU IMPAR
// let num1 = 17
// let resp = num1%2

// if (resp == 0){
//     console.log(`${num1} é um numero Par`)
// }else{
//     console.log(`${num1} é um numero Impar`)
// }
    // ou
// num1 % 2 === 0 ? console.log(`${num1} é um numero Par`) : console.log(`${num1} é um numero Impar`)

// Exercicio 2: COMPARAÇÃO DE 3 NUMEROS
// let num1 = 50
// let num2 = 15
// let num3 = 10
// if ((num1 > num2) && (num1 > num3)){
//     console.log(`${num1} é o maior!`)
// } else if ((num2 > num1) && (num2 > num3)){
//     console.log(`${num2} é o maior!`)
// }else{
//     console.log(`${num3} é o maior!`)
// }

// Exercicio 3: CALCULADORA SIMPLES
// const operator = "/"
// let num1 = 15
// let num2 = 0

// switch(operator){
//     case "+":
//         console.log(num1+num2);
//         break;
//     case "-":
//         console.log(num1-num2);
//         break;
//     case "*":
//         console.log(num1*num2);
//         break;
//     case "/":
//         num2 === 0 ? console.log("Erro! Divisão por Zero!"): console.log(num1/num2)
//         break;
// }


// Exercicio 4: Verificar dia da semana
let prompt = require('prompt-sync')()
let day = Number(prompt("Escolha um dia da semana: "))

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")  
        break;
    default:
        console.log("Dia inexistente!")
        break;
}

// Exercicio 5: Calcular dia de Mês
// let month = 9

// switch(month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("Este mês tem 31 dias")
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11: 
//         console.log("Este mês tem 30 dias")
//         break;
//     case 2:
//         console.log("Este Mês tem 28 dias")
//         break;
// }