//Estrutura de Dados

class Node{
  constructor(data){
    this.data = data
    this.next = null
    this.prev = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.size = 0
  }

  add(data){
    let newNode = new Node (data)
    if (this.head === null ){
      this.head = newNode
    } else {
      let current = this.head
      while (current.next !== null){
        current = current.next
      }
      current.next = newNode
    }
    this.size++
  }

  removeAt(index){
    if (index < 0 || index > this.size){
      console.log("Tamanho do index é invalido!")
    } else {
      let current = this.head
      let prev

      if (index === 0){
        this.head = current.next
      } else {
        for (let i = 0; i < index; i++){
          prev = current
          current = current.next
        }
        prev.next = current.next
      }
      this.size--
      return current.data
    }
  }

  insertAt(data, index){
    if (index < 0 || index > this.size){
      console.log("Tamanho do index é invalido!")
    } else {
      let newNode = new Node(data)
      let current = this.head
      let prev
      if (index === 0 ){
        newNode.next = this.head
        this.head = newNode
      }

    }
  }

  printList(){
    let current = this.head
    while (current !== null){
      console.log(current.data)
      current = current.next
    }
  }

  indexOf(data){
    let current = this.head
    let index = 0
    while (current !== null){
      if(current.data === data){
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
}

let list = new LinkedList()

list.add('Matheus')
list.add(20)
list.add('Zwytam')

list.printList()

console.log('')

console.log("Index of Zwytam is ", list.indexOf('Zwytam'))

console.log('')

list.removeAt(2)

list.printList()

console.log('')

list.add("Abbadi")

list.printList()

console.log('')
