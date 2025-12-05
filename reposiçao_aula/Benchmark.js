
// Importando as classes necessárias para o benchmark
import {Binarytree} from "../aula-10-10/BinaryTree.js";
import {AvlTree} from "../aula-10-10/AvlTree.js";
import {Linkedlist} from "../listasEncadeadas/ex1/LinkedList.js";
import {DoublyLinkedList} from "../listasEncadeadas/DoublyLinkedList.js";
import {Fila} from "../ExFilas/Fila.js";
import {Pilha} from "../ExerciciosPilhas/Pilha.js";
import { MeuArray } from "../listaArray-Tiago/MeuArray.js";



// Instanciando as classes
const tree = new Binarytree();
const Avltree = new AvlTree();
const list = new Linkedlist();
const doublyList = new DoublyLinkedList();
const queue = new Fila();
const stack = new Pilha();
const meuArray = new MeuArray();

// Função para gerar um número inteiro aleatório dentro de um intervalo
function getRandomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Tamanho do teste
const size = 10000000;
console.log("-----------INSERIR-----------");
// Testando o Array
console.time("timerArray");
for (let i = 0; i < size; i++) 
{
    if(i === size-1) {
        meuArray.adicionar("joão");
    } else {
        meuArray.adicionar(getRandomIntRange(i, size)); 
    }
}
console.timeEnd("timerArray");

// Testando a Fila
console.time("timerFila");
for (let i = 0; i < size; i++) 
{
    if(i === size-1) {
        queue.enqueue("joão");
    } else {
        queue.enqueue(getRandomIntRange(i, size));
        
    }
}
console.timeEnd("timerFila");


// Testando a Pilha
console.time("timerPilha");
for (let i = 0; i < size; i++) 
{
    if(i === size-1) {
        stack.adicionar("joão");
    } else {
        stack.adicionar(getRandomIntRange(i, size));
    }
}
console.timeEnd("timerPilha");



// Testando a LinkedList
console.time("timerLinkedList");
for (let i = 0; i < size; i++) 
{
    if(i === size-1) {
        list.insertAtEnd("joão");
    } else {
        list.insertAtBeginning(getRandomIntRange(i, size));
    }
}
console.timeEnd("timerLinkedList");


// Testando a DoublyLinkedList
console.time("timerDoublyLinkedList");
for (let i = 0; i < size; i++) 
{
    if(i === size-1) {
        doublyList.prepend("joão");
    } else {
        doublyList.append(getRandomIntRange(i, size));

    }
}
console.timeEnd("timerDoublyLinkedList");


// Testando a BinaryTree
console.time("timerBinaryTree");
for (let i = 0; i < size; i++) 
{
    if(i === size-1) {
        tree.insert("joão");
    } else {
        tree.insert(getRandomIntRange(i, size));
    }
}
console.timeEnd("timerBinaryTree");

// Testando a AVLBinaryTree
console.time("timerAVLBinaryTree");
for (let i = 0; i < size; i++) 
{
    if(i === size-1) {
        Avltree.insert("joão");
    } else {
        Avltree.insert(getRandomIntRange(i, size));
    }
}
console.timeEnd("timerAVLBinaryTree");


console.log("-----------BUSCAR-----------");
// Testando a busca do Array
console.time("timerArray");
meuArray.obterElemento(9999999);
console.log(meuArray.obterElemento(9999999));
console.timeEnd("timerArray");

// Testando a busca da Fila
console.time("timerFila");
queue.front();

console.timeEnd("timerFila");

// Testando a busca da Pilha
console.time("timerPilha");
stack.topo();
console.log(stack.topo());
console.timeEnd("timerPilha");

// Testando a busca da LinkedList
console.time("timerLinkedList");
list.find("joão");

console.timeEnd("timerLinkedList");

// Testando a busca da DoublyLinkedList
console.time("timerDoublyLinkedList");
doublyList.find("joão");
console.timeEnd("timerDoublyLinkedList");


// Testando a busca da BinaryTree
console.time("timerBinaryTree");
tree.search("joão");
console.timeEnd("timerBinaryTree");

// Testando a AVLBinaryTree
console.time("timerAVLBinaryTree");
Avltree.search("joão");
console.timeEnd("timerAVLBinaryTree");