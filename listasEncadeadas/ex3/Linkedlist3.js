import {Node} from './Node.js';

class Linkedlist3 {
    #head = undefined;
    #length = 0;


    append(value) {
        let node = new Node(value);
        node.next = this.#head;
        this.#head = node;
        this.#length++;
    }

    preprend(value) {
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
        if(this.#head === undefined) return undefined;
        if(this.#head.value === value) {
            this.#head = this.#head.next;
        }

        let current = this.#head;
        while(current.next !== undefined && current.next.value !== value) {
            current = current.next;
        }

        if(current.next !== undefined) {
            current.next = current.next.next;
        }
    }

    find(value) {
        let current = this.#head;
        while(current) {
            if(current.value === value) return current;
            current = current.next;
        }
        return -1;
    }

    toString() {
        let current = this.#head;
        let list = "";
        while(current) {
            list += `${current.value} -> `;
            current = current.next;
        }

        console.log(list + " undefined");
    }

}
export {Linkedlist3};