// Aula 16
//Estrutura de dados

// Quando usar Arrays: velocidade de acesso a elementos principalmente sabendo o tamnaho do Array.
// Quando usar Listas: Quando houver muita interatividade, AKA muita remoção e inserção de itens. 

class Node {
  constructor(data){
    this.data = data
    this.next = null
    this.prev = null
  }
}

class DoubleLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }

  add(data){
    let newNode = new Node(data)
    if (this.head === null){
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev =  this.tail
      this.tail = newNode
    }
    this.size++
  }

  insertAt(data, index){
    if (index > this.size || index < 0 ){
      return console.error('Index fora do limite!')
    } // Validação
    let newNode = new Node(data)
    let current = this.head
    if(index === 0){ // Caso lista Vazia, adiciona o elemento ao primeiro indice
      if (this.head === null){
        this.head = newNode
        this.tail = newNode
      } else { // Caso Lista com elemento:
        newNode.next = this.head;    // 'this.head' vai apontar para o novo elemento
        this.head.prev = newNode;     // O elemento anterior ('this.head') aponta para o novo
        this.head = newNode;          // Atualiza 'this.head' para o novo elemento
      }
    } else if (index === this.size){ // Adicionando elemento no ultimo index
      this.tail.next = newNode // 'this.tail' aponta para um proximo novo elemento -> 'newNode'
      newNode.prev = this.tail // 'newNode.prev' aponta para o antigo ultimo elemento -> 'this.tail'
      this.tail = newNode // Atualiza o ultimo elemento da lista como sendo o novo elemento adicionado
    } else { // Inserir em posição intermediária
      for(let i = 0; i < index; i++){ // Loop para percorrer 
        current = current.next
      } // até a posição desejada
      newNode.next = current // o novo elemento vai apontar para elemento atual, como sendo o proximo 
      newNode.prev = current.prev // o elemento anteriror ao atual, se torna o anterior ao novo
      current.prev.next = newNode // o proximo elemento que apontava para o antigo elemento, agora aponta para o novo elemento 
      current.prev = newNode // O novo elemento se torna o anterior do antigo elemento
    }
    this.size++
  }

  removeAt(index){
    if (index > this.size || index < 0 ){
      return console.error('Index fora do limite!')
    } // Validação 
    let current = this.head
    if (index === 0){ // Caso index seja igual a 0
      this.head = this.head.next // O 'this.head' vira o proximo item da lista, caso tenha
      if (this.head !== null){
        this.head.prev = null // Caso a lista não esteja vazia, o novo 'this.head' aponta para um elemento vazio
      } else {
        this.tail = null // Caso lista vique vazia, o ultimo elemento é atualizado para vazio também
      }
    } else if (index === this.size - 1) { // Caso remova o ultimo elemento
      this.tail = this.tail.prev // Atualiza o ultimo elemento para o anterior do antigo
      this.tail.next = null // E o proximo nó é atualizado para vazio
    } else { // Remover elemento de posição intermediaria
      for (let i = 0; i < index; i++){ // Loop para percorrer
        current = current.next
      } // até a posição desejada
      current.prev.next = current.next // Atualiza o próximo nó do anterior para o próximo nó.
      current.next.prev = current.prev // Atualiza o nó anterior do próximo para o anterior.
    }
    this.size--
  }

  getData(index){
    if (index > this.size || index < 0 ){
      return console.error('Index fora do limite!')
    } // Validação
    
    let current = this.head // Começa a partir do primeiro nó (cabeça).
    for( let i = 0; i < index; i++){  // Percorre a lista até o nó na posição desejada.
      current = current.next 
    }
    return current.data // Retorna o dado armazenado no nó.
  }

  print(){
    let current = this.head
    let result = []

    while(current !== null){
      result.push(current.data)
      current = current.next
    }

    console.log(result.join(' <=> '))

  }
}

let list = new DoubleLinkedList()
list.add('Matheus')
list.add('Marcia')
list.add('Manius')
list.print()

list.removeAt(1)
list.print()

list.insertAt('Gioconda', 1)
list.print()
