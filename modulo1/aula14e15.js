// Aula14
// Estrutura de Dados
class Node{
  constructor(data){ // Pega o valor do parametro
    this.data = data // Valor do nó (Ex:. Frango)
    this.next = null // Não existe o proximo valor na lista
  }
}

class LinkedList{
  constructor(){
    this.head = null // Null indica que a lista encontra-se vazia
    this.size = 0 // Tamanho da lista
  }
  
  add(data){ // Função para adicionar elemento a lista
    let newNode = new Node(data) // Criando novo Node na lista com o valor de (data)
    if (this.head === null){ // Caso o valor do primeiro Node da lista for 'null' (entende-se como lista vazia)
      this.head = newNode // O valor no primeiro item, passa (head) passa a ser o valor de (data)
    } else {
      let current = this.head // Caso já exista algum elemento dentro da lista, o valor de current, que se referencia ao valor do Node atual
      while(current.next !== null){
        current = current.next// Irá iterar sobre cada Node com valor diferente de 'Null',
      }
      current.next = newNode // Quando encontrar um valor 'null', irá alocalo ao espaço especifico da lista
    }
    this.size++
  }

  printList(){ // Função para printar a Lista
    let current = this.head // Deixa o valor de current para ser igual ao valor do 'head' da lista, caso seja 'null', valor será 'null'
    while(current !== null) {
      console.log(current.data) // Enquanto o valor de current for diferente de 'null', será 'printado' no console o valor do atual Node em que o current de encontra
      current = current.next // Atualiza o valor de 'current/head' para o valor de 'next', caso seja 'null' a execução do codigo termina
    }
  }

  insertAt(data, index){ // Função para inserir um item em uma posição especifica da Lista
    if(index < 0 || index > this.size){ // Validação da posição e tamanho da lista
      return console.error('Index fora do limite')
    } 
    let newNode = new Node(data) // Dado a ser inserido
    let current = this.head 
    let previous // Valor para guardar o valor anterior
    if(index === 0 ){
      newNode.next = this.head // Caso valor do 'index' de 'data' seja igual ao primeiro elemento da Lista, faz com que o valor do 'head' da lista se torne o proximo 
      this.head = newNode // Tornando o novo elemento o atual 'head'
    } else {
      for (let i = 0; i < index; i++){ // Função para encontrar o 'index' solicitado pela função 
        previous = current; // Valor de 'previous' se torna o valor de 'current'
        current = current.next // Valor de 'current' se torna o proximo valor da lista
      }
      newNode.next = current; // Encontrando o valor para inserir o novo elemento, o valor deele se torna o 'current' 
      previous.next = newNode // E o valor de 'previouse' se tornar o novo elemento
    }
    this.size++
  }

  indexOf(data){
    let current = this.head
    let index = 0

    while (current !== null){
      if (current.data === data){
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  removeAt(index){
    if (index < 0 || index > this.size){
      return console.error('Index fora do limite')
    }

    let current = this.head
    let previous

    if(index === 0){
      this.head = current.next
    } else {
      for (let i = 0; i < index; i++){
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.size--
    return current.data
  }
}

let list = new LinkedList()

list.add("Formação")
list.add('Matheus')
list.add(25)

list.printList()

list.insertAt('Geografia', 1)

list.printList()

list.removeAt(2)
list.removeAt(0)

list.printList()

list.add('Zwytam')
list.add('HollyWood!')

list.printList()

console.log(list.indexOf('Zwytam'))
console.log(list.indexOf('HollyWood!'))
