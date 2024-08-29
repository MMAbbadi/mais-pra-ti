// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.
function Fibonacci(){
    let a = 0
    let b = 1
    let fibonacciArr = []
  
    for (let i = 0; i < 10; i++){
        fibonacciArr.push(a)
        let sum = a + b
        a = b
        b = sum
    }   
    console.log(fibonacciArr)
  }
  
  Fibonacci()