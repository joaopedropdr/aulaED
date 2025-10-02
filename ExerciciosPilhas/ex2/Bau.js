class Bau {
    #itens = [];
    #tamanho = 0;

    adicionar(elemento) {
        this.#itens[this.#tamanho] = elemento;
        this.#tamanho++;
        console.table(this.#itens);
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

    verUltimo = () => console.log(this.#itens[0]);

    conferir = () => this.#tamanho === 0;
}

export {Bau};