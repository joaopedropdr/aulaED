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
}

export {MeuArray};