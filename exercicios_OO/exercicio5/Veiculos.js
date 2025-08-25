class Carros {
    constructor(modelo, ano, kmRodado) {
        this.modelo = modelo;
        this.ano = ano;
        this.kmRodado = kmRodado;
    }

    verSobre() {
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Kilometragem: ${this.kmRodado}`);
    }
}

class Moto {
    constructor(modelo, ano, kmRodado) {
        this.modelo = modelo;
        this.ano = ano;
        this.kmRodado = kmRodado;
    }

    verSobre() {
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Kilometragem: ${this.kmRodado}`);
    }
}
module.exports = Carros;
module.exports = Moto;