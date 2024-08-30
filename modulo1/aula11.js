Aula11 - Funções
let inverterString = (str) => {
  let invStr = ''
  for(let i = str.length-1; i >= 0; i--){
    invStr += str[i]
  }
  console.log(invStr)
}
inverterString('Hekko Kwold!')

------------------------------------------------------------------------
let showFunc = (sucCallBack, errCallBack) => {
  if (false){ //Alterando o valor booleano, altera a saida da função
    sucCallBack('Req bem sucedida!')
  } else {
    errCallBack('Req falhou')
  }
}
let sucCallBack = function(message){
  console.log(message)
}
let errCallBack = (message) => console.error(message)
showFunc(sucCallBack,errCallBack)

-----------------------------------------------------------------------
let inversString = (str) =>{
  let revStr = '';
  for (let i = str.length - 1; i >= 0; i--){
    revStr += str[i]
  }
  return revStr
}
console.log(inversString('Hello World! \n Welcome to our tour!'))

------------------------------------------------------------------------
let vogalStr = (str) =>{
  let vogais = ['a', 'e', 'i', 'o', 'u']
  let count = 0;
  for (let char of str.toLowerCase()){
    if(vogais.includes(char)){
      count++
    }
  }
  return count
}
console.log(vogalStr('Matheus Mayan Abbadi'))

------------------------------------------------------------------------
let randomNum = (max, min) =>{
  min = Math.ceil(min)
  max = Math.floor(max)
  let message = `Numero aleatorio gerado é: ${Math.floor(Math.random() * (max - min) + min)}`
  return message
}
console.log(randomNum(100,1));

------------------------------------------------------------------------
const diasEmDatas = (num1, num2) =>{
  let dif = num1 - num2
  return `A diferença entre ${num1} e ${num2} é ${dif}`
}
console.log(diasEmDatas(5, 2))

------------------------------------------------------------------------
let data = new Date()
console.log(data.getDate())
console.log(data.getMonth() + 1)
console.log(data.getFullYear())
console.log(data.toString())
data.setDate(data.getDate() + 730)
console.log(data.toString())
let data1 = new Date(2024, 7, 6)
let data2 = new Date(2023, 7, 6)
console.log(data1.getTime())
console.log(data2.getTime())
let mil_between_dates = Math.abs(data1.getTime() - data2.getTime())
console.log(mil_between_dates)
let mil_per_day = (1 * 24* 60 * 60 * 1000)
console.log(`Um dia tem ${mil_per_day} Milissegundos!`)
console.log(`A diferença entre as datas é de ${Math.ceil(mil_between_dates/mil_per_day)} dias`)
