class Carro {
    constructor(modelo, ano, velocidade) {
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = velocidade;
    }

    acelerar() {
        this.velocidade = this.velocidade + 10
        return console.log(`O ${this.modelo} está a ${this.velocidade}KM/h`)
    }

    freiar() {
        this.velocidade = this.velocidade - 5
        return console.log(`O ${this.modelo} está a ${this.velocidade}KM/h`)
    }
}

module.exports = Carro;