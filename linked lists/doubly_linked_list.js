class Node {
    constructor(val) {
        this.val = val;
        this.next = null; // ->
        this.prev = null; // <-
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val){
        let newNode = new Node (val)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode 
        }

        this.length++

        return this

    }

    pop(){
        if(!this.length) return undefined

        let poppedNode = this.tail

        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }

        this.length--

        return poppedNode

    }

    shift(){
        if(!this.head) return undefined

        let oldHead = this.head

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next
            oldHead.next = null
            this.head.prev = null
        }

        this.length--

        return oldHead
    }

    unshift(val){
        let newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.length++

        return this
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined

        let counter; 
        let current;

        if(index <= this.length/2){
            counter = 0
            current = this.head

            while(counter !== index)
            current = current.next
            counter++

        } else {
            counter = this.length - 1
            current = this.tail

            while (counter !== index)
            current = current.prev
            counter--
        }

        return current
    }

    set(index, val){

        let foundNode = this.get(index)

        if(foundNode) {
            foundNode.val = val

            return this
        } 

        return false;
    }

    insert(index, val) {

        if (index < 0 || index > this.length) return null
        if (index === 0) return this.unshift(val)
        if (index === this.length - 1) return this.push(val)
        
        let newNode = new Node(val)

        let prev = this.get(index - 1)
        let after = prev.next

        // arrow for previous node
        prev.next = newNode
        newNode.prev = prev
        
        // arrow for after node
        newNode.next = after
        after.prev = newNode

        this.length++

        return this

    }

    remove(index) {
        if (index < 0 || index > this.length) return null
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        let removedNode = this.get(index)
        let prev = removedNode.prev
        let after = removedNode.next

        // arrow for previous and after node
        prev.next = after
        after.prev = prev
        
        this.length--

        return removedNode
    
    }

}

const newList = new DoublyLinkedList()

console.log(newList.push(4))
console.log(newList.push(6))
console.log(newList.push(12))
console.log(newList.insert(2,8))