// DEFININDO ARRAYS
// let thingsList = Array()

// thingsList['hardware'] = Array()
// thingsList['fruits'] = Array()
// thingsList['People'] = Array('Tolkein', 'Peter Brett', 'Stephen King')

// thingsList ['hardware'][0] = 'Notebook'
// thingsList ['fruits'][0] = 'Laranja'
// thingsList ['hardware'][1] = 'Mouse'
// thingsList ['hardware'][2] = 'Teclado'
// thingsList ['fruits'][1] = 'Melão'
// thingsList ['fruits'][2] = 'Melância'

// console.table(thingsList)

//<----------------------------------------------------------------------->
// SORT() STRINGS
// let fruitList = []

// fruitList[0] = 'Maça'
// fruitList[1] = 'Bergamota'
// fruitList[2] = 'Caqui'
// fruitList[3] = 'Uva'
// fruitList[4] = 'Mamão'
// fruitList[5] = 'Melãncia'
// fruitList[6] = 'Morango'
// // console.log(fruitList.sort())
// console.log(fruitList)

// let trocou = true
// while(trocou){
//     trocou = false
//     for (let index = 0; index < fruitList.length; index++){
//         const el = fruitList[index];
//         let varAt = fruitList[index];
//         let varProx = fruitList[index + 1];
//         if (varAt > varProx) {
//             trocou = true
//             fruitList[index] = varProx;
//             fruitList[index + 1] = varAt 
//         }
//     }
// }
// console.log(fruitList)

//<----------------------------------------------------------------------->
// SORT() NUMEROS
// let numList = [10, 12, 0, 16, 7, 9]
// console.log(numList.sort((a,b) => a - b))

//<----------------------------------------------------------------------->
//PESQUISAR ELEMENTO ARRAY
// let fruitList = ['Melãncia', 'Morango', 'Abacate', 'Bergamota', 'Uva']
// let index = fruitList.indexOf('Almondega')
// if (index === -1){
//     console.log('Elemento não existe')
// } else {
//     console.log(`O elemento se encontra no index ${index}`)
// }

//<----------------------------------------------------------------------->
// FUNÇÕES
// const calcArea = (a, b) => {
//     let area = a * b
//     return area
// }
// let width = 50
// let height = 100

// let area = calcArea(width,height)
// console.log(`A aréa do terreno é de: ${area}m²`)

//<----------------------------------------------------------------------->

let fruitList = ['Melãncia', 'Morango', 'Abacate', 'Bergamota', 'Uva']
console.log(fruitList)
const ordArr = () =>{
    console.log(fruitList.sort())
}
ordArr()