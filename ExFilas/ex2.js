import {Fila2} from "./Fila2.js";

const fila = new Fila2();

const documento1 = {
    nome: "RG",
    paginas: 1
};

const documento2 = {
    nome: "Livro algoritimos",
    paginas: 150
};

const documento3 = {
    nome: "arquivo PDF",
    paginas: 3
};

const documento4 = {
    nome: "CNH",
    paginas: 1
};

const documento5 = {
    nome: "Livro estrutura de dados",
    paginas: 300
};

const documento6 = ["arquivo word", 5];


console.log("\x1b[31m%s\x1b[0m", "--------IMPRESSÃO---------");
fila.enqueue(documento1.nome);
fila.enqueue(documento2.nome);
fila.enqueue(documento3.nome);
fila.enqueue(documento4.nome);
fila.enqueue(documento5.nome);
fila.enqueue(documento6);
console.log("Os documentos foram adicionados na fila de espera!");
console.log("\x1b[31m%s\x1b[0m", "----------------------");
for(let i = 0; i < 5; i++) {
    console.log(`Documento que está sendo impresso: ${fila.dequeue()}`);
}





console.log(fila.tamanho());



