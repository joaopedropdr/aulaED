import {Fila} from "./Fila.js";

const fila = new Fila();

console.log("\x1b[32m%s\x1b[0m", "--------ATENDIMENTO---------");
console.log("Voce vai ser direcionado para a fila!!")
for(let i = 1; i < 5; i++) {
    setTimeout(() => {
        fila.enqueue(`Cliente ${i}`);
        console.log("Cliente na fila!");
    }, 2000);
}

for(let i = 1; i < 5; i++) {
    setTimeout(() => {
        console.log("\x1b[32m%s\x1b[0m", "--------------------");
        console.log(`Cliente que está sendo atendido: ${fila.dequeue()}`);
    }, 3000);
}

