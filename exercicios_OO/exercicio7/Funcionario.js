class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularBonus(pct) {
        let valorPct = (this.salario * pct) / 100;
        let novoSalario = valorPct + this.salario;
        return console.log(`------DADOS-----
NOME: ${this.nome}
SALÁRIO: ${this.salario}
SALÁRIO COM BÔNUS: ${novoSalario}`);
    }
}

export {Funcionario};