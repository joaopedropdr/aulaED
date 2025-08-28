const Funcionario = require("./Funcionario.js");

class Desenvolvedor extends Funcionario {
    constructor(nome, salario, qtdEntregas) {
        super(nome, salario);
        this.qtdEntregas = qtdEntregas;
    }

    calcularBonus() {
        if(this.qtdEntregas > 10) {
            let valorPct = this.salario * 0.15 ;
            let novoSalario = valorPct + this.salario;
            return console.log(`------DADOS-----
NOME: ${this.nome}
SALÁRIO: ${this.salario} 
SALÁRIO COM BÔNUS: ${novoSalario}`);
        } else {
            return console.log("Suas entregas não passaram da meta, voce não vai receber bonus esse mes");
        }
    } 
}

module.exports = Desenvolvedor;