
class Cliente {
    constructor(nome, cpf, end) {
        this.nome = nome;
        this.cpf = cpf;
        this.end = end;
    }

    dadosCliente() {
        console.log("-----DADOS------");
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Bairro: ${this.end.bairro}`);
        console.log(`Rua: ${this.end.rua}`);
        console.log(`Numero: ${this.end.numero}`);
    }
}

module.exports = Cliente;