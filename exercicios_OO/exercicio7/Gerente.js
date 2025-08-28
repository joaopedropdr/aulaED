const Funcionario = require("./Funcionario.js");

class Gerente extends Funcionario {
    constructor(nome, salario, qtdTarefas) {
        super(nome, salario);
        this.qtdTarefas = qtdTarefas;
    }

    calcularBonus() {
        if(this.qtdTarefas > 20) {
            let valorPct = this.salario * 0.25;
            let novoSalario = valorPct + this.salario;
            return console.log(`------DADOS-----
NOME: ${this.nome}
SALÁRIO: ${this.salario}
SALÁRIO COM BÔNUS: ${novoSalario}`);
        } else {
            return console.log("Suas tarefas não passaram da meta, voce não vai receber bonus esse mes");
        }
    } 

}

module.exports = Gerente;