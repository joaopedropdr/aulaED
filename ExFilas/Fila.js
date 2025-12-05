class Fila {
    #items = [];
    #inicio = 0;
    #fim = 0;

    
    enqueue(elemento) {
        this.#items[this.#fim] = elemento;
        this.#fim++;
    }
    
    dequeue() {
        if(this.isEmpty()) {
            return undefined;
        }
        
        const item = this.#items[this.#inicio];
        delete this.#items[this.#inicio];
        this.#inicio++;

        if(this.#inicio === this.#fim) {
            this.#inicio = 0;
            this.#fim = 0;
        }

        return item;
    }
    
    front() {
        if(this.isEmpty()) {
            return undefined;
        }
        
        return this.#items[this.#inicio];
    }
    search(value) {
        if(this.isEmpty()) {
            return undefined;
        }

        for(let i =0; i < this.size(); i++) {
            if(value === this.#items[i]) {
                console.log(this.#items[i]);
                return;
            }
        }
    }

    end() {
        if(this.isEmpty()) {
            return undefined;
        }
        
        return this.#items[this.#fim];
    }
    
    size = () => this.#fim - this.#inicio;
    
    isEmpty = () => this.#fim === this.#inicio;

    clear() {
        this.#items = [];
        this.#inicio = 0;
        this.#fim = 0;
    }
}

export {Fila};