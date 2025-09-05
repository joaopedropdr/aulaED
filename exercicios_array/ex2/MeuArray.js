class MeuArray {

    #items = []; 
    #tamanho = 0;

    adicionar(funcionario) {
        this.#items[this.#tamanho] = funcionario;
        this.#tamanho++;
    }

    nomeTerceiroParticipante() {
        let nome = this.#items[2];
        console.log(nome);
        return nome;
    }

    limpar() {
        let tamanho = this.#tamanho
        for(let i = 0; i < tamanho; i++) {
            this.#tamanho--;
            delete this.#items[this.#tamanho];
        }
    }
} 

module.exports = MeuArray;