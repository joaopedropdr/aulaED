import {Linkedlist2} from "./Linkedlist2.js";

const list = new Linkedlist2();
console.log("-----CORRIDA------");
console.log("\x1b[32m%s\x1b[0m", "Inserindo tartarugas");
list.insertAt("Tartaruga lenta", 0);
list.insertAt("Tartaruga 2", 1);
list.toString();
list.insertAt("Tartaruga 3", 0);
list.insertAt("Tartaruga 4", 2);
list.insertAt("Tartaruga rapida", 4);
list.toString();
console.log("--------------");
console.log("\x1b[34m%s\x1b[0m", "Posição das tartarugas");
console.log(list.indexOf("Tartaruga rapida"));
console.log("--------------");
console.log("\x1b[31m%s\x1b[0m", "Removendo as tartarugas");
list.removeByValue("Tartaruga lenta")
list.toString();




