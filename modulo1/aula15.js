class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = head
        this.tail = tail
        this.size = 0
    }

    add(data){
        let newNode = new Node(data)

        if (this.head === null){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.size++
    }

    insertAt(data, index){
        let newNode = new Node(data)
        if(index < 0 || index > this.size){
            return console.error('Index fora do limite')
        }
        let current = this.head
        if(index === 0){
            newNode.next = this.head
            this.head = newNode
        } else {
            
        }

    }
}

let list = DoublyLinkedList()

