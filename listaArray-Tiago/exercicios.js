// EX-1
import { MeuArray } from "./MeuArray.js";
const array = new MeuArray();

array.verTamanho();
// O valor retornado é 0, pois o tamanho do array só aumenta quando adicionamos algo a ele.


// EX-2
array.adicionar(10);
array.adicionar(20);
array.adicionar(30);

array.remover();
array.verTamanho();

// Adicionei limpar no final de todos os exercicios, para eles funcionarem corretamente!
array.limpar();

// No inicio do código adicionamos 3 itens, nesse ponto o array está na posição 2, mas seu tamanho é 3. Quando removemos o ultimo elemento o item é deletado e seu tamanho vai para 2, pois quando um item é removido o seu tamanho diminui 1 valor, deixando assim a posição 2 do array pronta para receber o próximo valor.

// EX-3
array.adicionar('a');
array.adicionar('b');
array.adicionar('c');
console.log(array.obterElemento(1));


array.limpar();
// A saída desse código é b, pois ele esta na posição 1 do array.

// EX-4
console.log(array.remover());


array.limpar();
// Ele retorna undefined, pois no método remover tem uma condição inicial, fazendo com que se o tamanho for === 0 ele retorna undefined.

//EX-5 
// console.log(MeuArray.#items());
// O # no javaScript significa que o atributo da classe vai ser privado, ele é usado para não ser possivel usar esse numero fora na classe de onde esta. Se tentarmos acessar ele fora da classe, teremos um erro, pois esse atributo é privado.

//EX-6
array.adicionar(5);
array.adicionar(15);
array.limpar();
array.adicionar(25);
array.adicionar(35);
array.verArray();


array.limpar();
// O resultado desse código é array[0] = 25 e array[1] = 35. pois o método limpar, removeu todos os elementos do array.

// EX-7
array.adicionar('maça');
array.adicionar('banana');
array.remover();


array.limpar();
// A variavel itemRemovido que esta dentro do método remover tem o valor 'banana', pois ela guarda o valor do ultimo item do array que foi removido.

//EX-8
array.adicionar(100);
array.adicionar(200);
console.log(array.obterElemento(0));
console.log(array.obterElemento(2));
console.log(array.obterElemento(-1));


array.limpar();
// o valor do elemento 0 é 100, os outros dois são undefined, pois não existe nenhum valor no indice 2 e -1 do array.

// EX-9
// O conceito de usar atributos privados, e acessar eles somente com metodos dentro da classe se chama encapsulamento. Ele é usado para não dar chance de o usuário manipular um valor que não pode ser alterado, senão seus métodos poderam dar errado, como é o caso do array.

// EX-10
array.adicionar(5);
array.adicionar(10);
array.adicionar(15);
array.remover();
array.adicionar(20);
console.log(array.obterElemento(1));
array.verTamanho();


array.limpar();


