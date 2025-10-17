import {Node} from './Node.js';

class Linkedlist {

    #head = undefined;
    #length = 0;

    insertAtBeginning(value) {
        let node = new Node(value);
       
        node.next = this.#head;
        this.#head = node;
        this.#length++;
    }

    insertAtEnd(value) {
        let node = new Node(value);
        if(this.#head === undefined) {
            this.#head = node;
            return;
        }

        let current = this.#head;
        while(current.next !== undefined) {
            current = current.next;
        }
        current.next = node;
        this.#length++;
    }

    removeByValue(value) {
        if(this.#head === undefined) {
            return;
        }

        if(this.#head.value === value) {
            this.#head = this.#head.next;
            return;
        }

        let current = this.#head;
        while(current.next !== undefined && current.next.value !== value) {
            current = current.next;
        }

        if(current.next !== undefined) {
            current.next = current.next.next;
        }

        this.#length--;
    }

    find(value) {
        let current = this.#head;
        while(current !== undefined) {
            if(current.value === value) {
                return current.value;
            }
            current = current.next;
        }
        return -1;
    }

    toString() {
        let current = this.#head;
        let list = "";
        while(current !== undefined) {
            list += `${current.value} -> `;
            current = current.next;
        }
        console.log(list + " undefined");
    }

    size() {
        let current = this.#head;
        let count = 0;
        while(current !== undefined) {
            cunt++;
            current = current.next;
        }
        return count;
    }

    isEmpty = () => this.#head === undefined;
}

export {Linkedlist};