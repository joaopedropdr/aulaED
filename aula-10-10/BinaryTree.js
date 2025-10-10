import {Node} from "./node.js";

class Binarytree {
    #root = null;

    insert(valeu) {
        const newNode = new Node(value);
        if(this.#root === newNode) {
            this.#root = newNode;
        } else {
            this._insertNode(this.#root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value <= node.value) {
            if(node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if(node.rigth === null) {
                node.rigth = newNode;
            } else {
                this._insertNode(node.rigth, newNode);
            }
        }
    }

    // método usdo para visitar cada nó de maneira crescente
    inOrder(node = this.#root) {
        if(node !== null) {
            this.inOrder(node.left); // visita a subárvore a esquerda
            console.log(node.value); // Visita o nó atual
            this.inOrder(node.rigth); // Visita a subárvore a direita
        }
    }

    // método usado para processar ou manipular cada nó antes de seus filhos
    preOrder(node = this.#root) {
        if(node !== null) {
            console.log(node.value); // Visita o nó atual
            this.preOrder(node.left); // visita a subárvore a esquerda
            this.preOrder(node.rigth); // Visita a subárvore a direita           
        }
    }

    // Método usado para processar os nós filhos antes de seu nó pai
    postOrder(node = this.#root) {
        if (node !== null) {
            this.postOrder(node.left); // visita a subárvore a esquerda
            this.postOrder(node.rigth); // Visita a subárvore a direita  
            console.log(node.value); // Visita o nó atual
        }
    }

    // Método auxiliar para encontrar o nó com o menor valor
    _findMinNode(node) {
        while(node.left !== null) {
            // Continua indo para esquerda até chegar no menor valor
            node = node.left;
        }
        return node;
    }

    // Método auxiliar para encontrar o nó com o maior valor
    _findMaxNode(node) {
        while(node.rigth !== null) {
            // Continua indo para direita até chegar no maior valor
            node = node.rigth;
        }
        return node;
    }

    // Método para buscar um valor na árvore
    search(value) {
        return this._serachNode(this.#root, value);
    }

    // Metodo auxiliar para realizar a busca recursivamente
    _serachNode(node, value) {
        // Se o nó atual é null, o valor não está na árvore
        if(node === null) return false;

        if(value === node.value) {
            // Se o valor é encontrado, retorne true
            return true;
        } else if (value < node.value) {
            // Se o valor procurado é menor, continua a busca na subárvore da esquerda
            return this._serachNode(node.left, value);
        } else {
            // Se o valor procurado é maior, continua a busca na subárvore da direita
            return this._serachNode(node.rigth, value);
        }
    }

    remove(value) {
        this.#root = this._removeNode(this.#root, value) // Inicia a remoção pela raiz;
    }

    removeNode(node, value) {
        if(node === null) {
            return null; // Se o nó é null, não há nada para remover
        }

        if(value < node.value) {
            node.left = this._removeNode(node.left, value);
            return node;
        } else if(value > node.value) {
            node.rigth = this._removeNode(node.rigth);
            return node;
        } else {
            // caso 1: Nósem filhos (nó folha)
            if(node.left === null && node.rigth === null) {
                node = null;
                return node;
            }

            // caso 2: nó com dois filhos
            if(node.left === null) {
                node = node.rigth;
                return node;
            } else if(node.rigth === null) {
                node = node.left;
                return node;
            }

            // Caso 3: Nó com dois filhos
            const aux = this._findMinNode(node.rigth);
            node.value = aux.value; // Substitui o valor do nó atual pelo valor mínimo encontrado
            node.rigth = this._removeNode(node.rigth, aux.value); // remove o nó duplicado na subárvore da direita
            return node;
        }
    }
}