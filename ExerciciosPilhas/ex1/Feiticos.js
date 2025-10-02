class Feiticos {
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

    verTopo = () => console.log(this.#itens[this.#tamanho - 1]);

    // verFeiticos = () => console.table()
    
    conferir = () => this.#tamanho === 0;
}

export {Feiticos};