class MeuArray {
    #items = [];
    #tamanho = 0;

    adicionar(item) {
        this.#items[this.#tamanho] = item;
        this.#tamanho++;
    }

    remover() {
        if(this.#tamanho === 0) {
            return undefined;
        }

        const itemRemovido = this.#items[this.#tamanho - 1];
        delete this.#items[this.#tamanho - 1]; 

        this.#tamanho--;
        console.log(`Item removido: ${itemRemovido}`);
        return itemRemovido;
    }

    verTamanho() {
        console.log(this.#tamanho);
    }

    verArray() {
        const tabelaitens = console.table(this.#items);
        return tabelaitens;
    }

    obterElemento(i) {
        return this.#items[i]
    }

    limpar() {
        let tamanho = this.#tamanho;
        this.#tamanho -= 1;
        for(let i = 0; i < tamanho; i++) {
            delete this.#items[this.#tamanho];
            this.#tamanho--;
        }
        this.#tamanho += 1
    }
}

export {MeuArray};