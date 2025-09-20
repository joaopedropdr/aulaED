import {Linkedlist} from "./LinkedList.js";

const list = new Linkedlist();
// Adicionando valores ao inicio da lista
list.insertAtBeginning("Caverna");
// mostra a lista por escrito
list.toString(); // Saída: Caverna -> undefined 
list.insertAtBeginning("Cachoeira");
list.insertAtBeginning("Mirante");
list.toString(); // Saída: Mirante -> Cachoeira -> Caverna -> undefined
list.insertAtBeginning("Rio amazonas");
list.toString();

// Adicionando valores ao fim da lista
list.insertAtEnd("Mar");
list.toString();
list.insertAtEnd("Praia");
list.insertAtEnd("Ilhas");
list.toString(); // Saída: Rio amazonas -> Mirante -> Cachoeira -> Caverna -> Mar -> Praia -> Ilhas -> undefined
list.removeByValue("Rio amazonas");
list.removeByValue("Caverna");
list.toString();

// Encontra um valor na lista
console.log(list.find("Praia")); // Saída: Praia
console.log(list.find("Rio amazonas")); // Saída: undefined