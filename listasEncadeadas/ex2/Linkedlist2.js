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

    indexOf(value) {
        let current = this.#head;
        let index = 0;
        while(current) {
            if(current.value === value) return  value + " está na posição " + index;
            current = current.next;
            index++;
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

    insertAt(value, index) {
        if(index < 0 || index > this.#length) return undefined;

        let node = new Node(value);
        // verifica se o valor vai ser adicionado na primeira posição
        if(index === 0) {
            this.insertAtBeginning(value);
            return;
        }
        // verifica se o valor vai ser adicionado na ultima posição
        if(index === this.#length) {
            this.insertAtEnd(value);
            return;
        }

        let current = this.#head;
        let count = 0;
        let previus;
        while(count < index) {
            previus = current
            current = current.next;
            count++;
        }

        previus.next = node;
        node.next = current;
        this.#length++;
    }
}

export {Linkedlist2};