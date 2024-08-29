// EXERCICIOS +praTI

// CONDICIONAIS
// IFs
// Exercicio 1:
// const isPositivo = (n) =>{
//   n > 0 ? console.log(`${n} é um n° Positivo`) : console.log(`${n} é um n° Negativo`)
// }
// isPositivo(3);

// Exercicio 2:
// const isBissexto = (year) => {
//   (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? console.log(`${year} é um ano Bissexto`) : console.log(`${year} não é um ano Bissexto`)
// }
// isBissexto(2026)

// IFs e Elses
// Exercicio 3:
// let n1 = 1;
// let n2 = 1;
// let n3 = 1;
// let studentGrade = n1 + n2 + n3;
// let minGrade = 7;

// if (studentGrade / 3 === 10){
//   console.log("Resultado: Aluno aprovado com nota A!");
// } else if (studentGrade / 3 === 9 ){
//   console.log("Resultado: Aluno aprovado com nota B!");
// } else if (studentGrade / 3 === 8 ){
//   console.log("Resultado: Aluno aprovado com nota C!");
// } else if (studentGrade / 3 === 7 ){
//   console.log("Resultado: Aluno aprovado com nota D!");
// } else{
//   console.log("Resultado: Aluno reprovado com nota F!");
// }

// Exercicios 4:
// const isPar = (num) => {
//   if (num % 2 === 0){
//     console.log(`${num} é par`)
//   } else{
//     console.log(`${num} é impar`)
//   }
// }
// isPar(9);

// Exercicio 5:
// const catIdade = (ageRange) => {
//   if (5 <= ageRange && ageRange <= 7){
//     console.log("Participante é da categoria: Infantil A!");
//   } else if (8 <= ageRange && ageRange <= 10){
//     console.log("Participante é da categoria: Infantil B!");
//   } else if (11 <= ageRange && ageRange<= 13){
//     console.log("Participante é da categoria: Juvenil A!");
//   } else if (14 <= ageRange && ageRange <= 17){
//     console.log("Participante é da categoria: Juvenil B!");
//   } else if (18 <= ageRange && ageRange <= 75){
//     console.log("Participante é da categoria: Adulto!");
//   } else if (5 > ageRange || ageRange > 75){
//     console.log("Participante não pode competir!");
//   }
// }
// catIdade(59)

// SWITCH
// Exericio 6:
// let day = prompt("Digite um dia: ");

// switch (Number(day)){
//   case 1:
//     console.log('Sunday');
//     break;
//   case 2:
//     console.log('Monday');
//     break;
//   case 3:
//     console.log('Tuesday');
//     break;
//   case 4:
//     console.log('Wednesday');
//     break;
//   case 5:
//     console.log('Thursday');
//     break;
//   case 6:
//     console.log('Friday');
//     break;
//   case 7:
//     console.log('Saturday');
//     break;
//   default:
//     console.log('Dia invalido!')
// }

// Exerecicio 7:
// let operador = prompt("Digite um tipo de operação (+,-,/,*):");
// let n1 = Number(prompt("Digite um numero para ser Operado:" ));
// let n2 = Number(prompt("Digite um numero para Operar:" ));

// switch (operador){
//   case "+":
//     console.log(n1 + n2);
//     break;
//     case "-":
//       console.log(n1 - n2);
//       break;
//     case "*":
//       console.log(n1 * n2);
//       break;
//     case "/":
//       console.log(n1 / n2);
//       break;
// }

// Exercicio 8:
// let season = 1;
// switch (season) {
//   case 1:
//     console.log('Primavera');
//     break;
//   case 2:
//     console.log('Verão');
//     break;
//   case 3:
//     console.log('Outono');
//     break;
//   case 4:
//     console.log('Inverno');
//     break;
//   default:
//     console.log("Estação Invalida")
// }

// COMBINADOS
// Exercicio 9:
// let ageRange = 201;
// if (ageRange >= 0 && ageRange <= 12){
//   console.log("Criança")
// } else if (ageRange >= 13 && ageRange <= 17){
//   console.log("Adolescente")
// } else if ( 18 <= ageRange && ageRange <= 59){
//   console.log('Adulto')
// } else if (60 <= ageRange && ageRange <= 102){
//   console.log('Idoso')
// } else {
//   console.log('Idade Invalida')
// }

// CORRENÇÃO EXERCICIO 9:
//  

// Exercicio 10:
// let peso = 93;
// let altura = 1.94;
// let _IMC = peso / (altura**2);
// console.log(_IMC)
// if (_IMC < 18.5) {
//   console.log("Abaixo do peso");
// } else if (_IMC >= 18.5 && _IMC <= 24.9){
//   console.log("Peso Normal")
// } else if (_IMC <= 25 && _IMC <= 29.9){
//   console.log("Sobrepeso!")
// } else if (_IMC >= 30 && _IMC <= 34.9){
//   console.log("Obesidade Grau I")
// } else if (_IMC >= 35 && _IMC <= 39.9){
//   console.log("Obesidade Grau II")
// } else if (_IMC >= 40){
//   console.log("Obesidade Grau III")
// }

// REPETIÇÃO
// Exercicio 1:
// const fibonacci = (n) =>{
//   let a = 0, b = 1;
//   console.log(a)
//   console.log(b)
//   for (let i = 2; i<= n; i++){
//     let f = a;
//     a = b;
//     b += f;
//     console.log(b)
//   }
// }
// fibonacci(9)

// Exercicio 2:
// function primeNumber(num) {
//   for (var divisor = 2; divisor < num; divisor++)
//   if (num % divisor == 0) return false;
//   return true;
// }
// var determinadoNumero = 50;
// for (var i = 2; i < determinadoNumero; i++) if (primeNumber(i)) console.log(i);

// Exercicio 3:

// Exercicio 4:
// const fatNum = (num) =>{
//   let resp = num
//   while (num>1){
//     num--;
//     resp = resp*num
//   }
//   console.log(resp)
// }
// fatNum(4)

// Exercicio 5:
// function reverseString(str) {
//   let i = str.length - 1
//   let newString = "";
//   while (i >= 0) {
//     newString += str[i];
//     i--;
//   }
//   console.log(newString);
// }
// reverseString('1234');

// Exercicio 6:
// const isPalidromo = (str) => {
//   let i = str.length - 1;
//   let newString = "";
//   while (i >= 0){
//     newString += str[i];
//     i--;
//   }
//   if(str === newString){
//     console.log(`O numero ${str} é palidromo`);
//   }else{
//     console.log(`O numero ${str} não é palidromo`);
//   }
// }
// isPalidromo('141');

// DO e WHILE
// Exercicio 7:
// const countDigits = (str) => {
//   let i = 0;
//   let count = 0;
//   do{
//     count += 1;
//     i++;
//   }while (i < str.length);
//   console.log(count);
// }
// countDigits('123623');

// Exercicio 8:
// const sumDigits = (str) =>{
//   let i = 0;
//   let sum = 0;
//   do{
//     sum += Number(str[i]);
//     i++;
//   }while (i < str.length);
//   console.log(sum);
// }
// sumDigits("2568")

// Exercicio 9:

// Exercicio 10:
// const maxDiv = (num1, num2) => {
//   do{
//    let temp = num2;
//    num2 = num1 % num2;
//    num1 = temp;
//   }while(num2 !== 0)
//   console.log(num1);
// }
// maxDiv(125,300);