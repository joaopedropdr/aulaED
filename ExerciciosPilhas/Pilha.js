class Pilha {
    #itens = [];
    #tamanho = 0;

    adicionar(elemento) {
        this.#itens[this.#tamanho] = elemento;
        this.#tamanho++;
    }

    remover() {
        if(this.#tamanho === 0) {
            return undefined;
        }

        const itemRemovido = this.#itens[this.#tamanho - 1];
        delete this.#itens[this.#tamanho - 1];
        this.#tamanho--;
        console.table(this.#itens);
        return itemRemovido;
    }

    topo() {
        if(this.#tamanho === 0) {
            return undefined;
        }
        return this.#itens[this.#tamanho - 1];
    }
    ultimo() {
  
    }
    isEmpty = () => this.#tamanho === 0;
    limpar() {
        this.#itens = [];
        this.#tamanho = 0;
    }

}

export {Pilha};