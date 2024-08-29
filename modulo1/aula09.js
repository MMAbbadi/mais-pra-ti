// const arrSum = () => {
//   let sum = 0;
//   let arr = [10, 20, 30];
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// };
// arrSum();
// --------------------------------------------------------------------------
// const maxArr = () => {
//   let arr = [10, 20, 30, 70, 65, 100, 15, 12];
//   let max = arr[0];
//   for( let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//       max = arr[i];
//     }
//   }
//   console.log(max)
// }
// maxArr();
// ---------------------------------------------------------------------------
// const maxArr = () => {
//   let arr = [25,60,12,87,4]
//   let max = Math.max(...arr) 
//   console.log(max)
// }
// maxArr()
// ---------------------------------------------------------------------------
// const maxArr = () => {
//   let arr = [25,60,12,87,4]
//   let maior = arr[0];
//   for (let i of arr){
//     if (i > maior) maior = i
//   }
//   console.log(maior)
// }
// maxArr()
// ---------------------------------------------------------------------------
// REVERSÃO ARRAYS
// const revArr = () =>{
//   let arr = [ 1, 2, 3, 4]
//   let revArr = [];
//   for (let i = arr.length - 1; i >= 0; i--){
//     revArr.push(arr[i])
//   }
//   console.log(revArr)
// }
// revArr();
// ---------------------------------------------------------------------------
// NOVO ARRAY COM NUMEROS 
// const parArr = () =>{
//   let arr = [1, 2, 3, 4]
//   let parArr = []
//   for(let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//       parArr.push(arr[i])
//     }
//   }
//   console.log(parArr)
// }
// parArr()
// ---------------------------------------------------------------------------
// OCORRENCIAS DE UM VALOR
// const ocrArr = () =>{
//   let arr = [10, 20, 10, 100, 84, 8, 50, 10, 10, 90, 110, 20, 30, 90, 84]
//   let escp = 84
//   let ocur = 0
//   for (let i = 0; i < arr.length; i ++){
//     if(arr[i] === escp){
//       ocur++
//     }
//   }
//   console.log(`O n° ${escp} aparece ${ocur} vezes no array ${arr}`)
// }
// ocrArr()
// ---------------------------------------------------------------------------
// const intOcrArr = () => {
//   let arr = [10, 20, 10, 100, 84, 8, 50, 10, 10, 90, 110, 20, 30, 90, 84]
//   let ocur = 0;
//   let escp = Number(prompt('Escolha qual numero a ser pesquisado'))
//   for (let i = 0; i < arr.length; i ++){
//     if(arr[i] === escp){
//       ocur++
//     }
//   }
//   console.log(`O n° ${escp} aparece ${ocur} vezes no array ${arr}`)
// }
// intOcrArr();
// ---------------------------------------------------------------------------
// ARRAYS/VETORES MULTIDIMENCIONAIS
let matriz = [
  [10, 20, 30, 40],
  [20, 30, 40, 50],
  [30, 40, 50, 60],
  [60, 70, 80, 90]
]
console.log(matriz) // console.table(matriz) - gera uma tabela

for(let i = 0; i < matriz.length; i++){
  for(let k = 0; k < matriz[i].length; k++){
    console.log(`Elemento na posição: [${i}][${k}]: ${matriz[i][k]}`)
  }
}
console.table(matriz)