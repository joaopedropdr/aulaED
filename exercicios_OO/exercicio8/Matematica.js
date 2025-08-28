class Matematica {
    static somar(a, b) {
        let soma = a + b;
        return soma;
    }

    static subtrair(a, b) {
        let sub = a - b;
        return sub;
    }

    static fatorial(n) {
        let fatorar = n
        for(let j = (n - 1); j > 0; j--) {
            fatorar *= j;
        }
        return fatorar;
    }
}

module.exports = Matematica;