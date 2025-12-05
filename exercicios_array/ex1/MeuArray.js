class MeuArray {
    #items = [];
    #tamanho = 0;

    adicionar(tarefa) {
        this.#items[this.#tamanho] = tarefa;
        this.#tamanho++;
    }

    remover() {
        if(this.#tamanho === 0) {
            return undefined;
        }

        const tarefaRemovida = this.#items[this.#tamanho - 1];
        delete this.#items[this.#tamanho - 1]; 

        this.#tamanho--;
        console.log(`Tarefa removida: ${tarefaRemovida}`);
        return tarefaRemovida;
    }

    verTamanho() {
        console.log(this.#tamanho);
    }

    verTarefas() {
        const tabelaTarefas = console.table(this.#items);
        return tabelaTarefas;
    }
    search(value) {
        if(this.#tamanho === 0) return undefined;
        if(value === this.#items[0]) return this.#items[0];
        if(value === this.#items[this.#tamanho - 1]) return this.#items[this.#tamanho - 1];
        for(let i = 0; i < this.#tamanho; i++) {
            if(value === this.#items[i]) return this.#items[i]
        }

        return undefined;
    }
}

export {MeuArray};