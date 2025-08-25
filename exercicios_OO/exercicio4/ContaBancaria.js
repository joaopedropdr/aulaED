class ContaBancaria {
    #saldo = 0;

    depositar(valor) {
        this.#saldo = this.#saldo + valor;
    }

    sacar(valor) {
        this.#saldo = this.#saldo - valor;
    }

    verSaldo() {
        return console.log(`Saldo: ${this.#saldo}R$`);
    }
}

module.exports = ContaBancaria;