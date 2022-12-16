class Node {
    constructor(val) {
        this.val = val
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)

        if (!this.length) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.length++

        return this // return the linked list
    }

    unshift(val) {
        let newNode = new Node(val)

        if (!this.length) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.length++

        return this // return the linked list
    }

    shift() {
        if (!this.head) return undefined

        let oldHead = this.head

        if (this.length === 1) {
            this.head = null
            this.tail = null

        } else {
            this.head = oldHead.next
            oldHead.next = null
            this.head.prev = null
        }

        this.length--

        return oldHead

    }

    set(index, val) {
        let foundNode = this.get(index)

        if (foundNode) {
            foundNode.val = val

            return this
        }

        return false;

    }

    remove(index) {

        if (index < 0 || index > this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        let removedNode = this.get(index)

        let previousNode = removedNode.prev
        let afterNode = removedNode.next

        previousNode.next = afterNode
        afterNode.prev = previousNode

        this.length--

        return removedNode

    }

    pop() {
        if (!this.head) return undefined

        let poppedTail = this.tail

        if (this.length === 1) {
            this.head = null;
            this.tail = null;

        } else {
            this.tail = poppedTail.prev
            this.tail.next = null
            poppedTail.prev = null
        }

        this.length--

        return poppedTail

    }

    get(index) {

        if (index < 0 || index > this.length) return undefined

        let counter;
        let current;

        if (index <= (this.length / 2)) {
            counter = 0;
            current = this.head

            while (counter !== index) {
                current = current.next
                counter++
            }


        } else {
            counter = this.length - 1
            current = this.tail

            while (counter !== index) {
                current = current.prev
                counter--
            }
        }

        return current

    }

    insert(index, val) {

        if (index < 0 || index > this.length) return undefined
        if (index === 0) return this.unshift(val)
        if (index === this.length - 1) return this.push(val)

        let newNode = new Node(val)

        let previousNode = this.get(index - 1)
        let afterNode = previousNode.next

        // arrow before the node
        previousNode.next = newNode
        newNode.prev = previousNode

        // arrow after the node
        newNode.next = afterNode
        afterNode.prev = newNode

        this.length++

        return this

    }

}

let newList = new DoublyLinkedList
console.log(newList.push(4))
console.log(newList.push(6))
console.log(newList.push(12))
console.log(newList.push(16))
// console.log(newList.unshift(2))
// console.log(newList.shift())
// console.log(newList.pop())
// console.log(newList.get(1))
// console.log(newList.set(1, 8))
// console.log(newList.remove(1))
// console.log(newList.insert(2,8))

// ! ##################################################################################

var getDecimalValue = function(head) {
    let convertBinary = head.join('')
    
    return parseInt(convertBinary, 2)
    
}

console.log(getDecimalValue([1,0,1]))