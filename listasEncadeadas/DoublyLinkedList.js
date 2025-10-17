import {Node} from "./Node.js";
class DoublyLinkedList {
    #head = undefined;
    #tail = undefined;
    #length = 0;

    append(value) {
        const newNode = new Node(value);
        if(this.#head == undefined) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#tail.next = newNode;
            newNode.prev = this.#tail;
            this.#tail = newNode;
        }

        this.#length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if(this.#head == undefined) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            newNode.next = this.#head;
            this.#head.prev = newNode;
            this.#head = newNode;
        }

        this.#length++;
    }

    removeLast() {
        if(this.#tail == undefined) return undefined;

        const removeNode = this.#tail;
        if(this.#tail === this.#head) {
            this.#head = null;
            this.#tail = null;
        }  else {
            this.#tail = this.#tail.prev;
            this.#tail.next = undefined;
        }

        this.#length--;
        return removeNode.value;
    }
    removeFirst() {}
    traverse() {}
    traverseReverse() {}
    insertAt(value ,index) {}
    find(value) {}
    removeAt(index) {}
    size = () => this.#length; 
    isEmpty = () => this.#length === 0;
    toString() {} 
}

export {DoublyLinkedList};