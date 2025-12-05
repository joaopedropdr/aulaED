import {AvlNode} from "./AvlNode.js";
class AvlTree {
    #root = undefined;
    // Pega a altura de um nó
    getHeight(node) {
        return node ? node.height : 0;
    }
    // Calcula o fator de balanciamento de um nó
    getBalanceFactor(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.rigth) : 0;
    }
    // Atualiza a altura de um nó
    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.rigth));
    }
    // Rotação simples à direita
    rotateRigth(y) {
        const x = y.left;
        const T2 = x.rigth;
        x.rigth = y;
        y.left = T2;
        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }
    // Rotação simples à esquerda
    rotateLeft(x) {
        const y = x.rigth;
        const T2 = y.left;
        y.left = x;
        x.rigth = T2;
        this.updateHeight(x);
        this.updateHeight(y);

        return t;   
    }

    insert(value) {
        this.#root = this._insert(this.#root, value);
    }

    _insert(node, value) {
        if(!node) return new AvlNode(value);
        if(value < node.value) {
            node.left = this._insert(node.left, value);
        } else if(value > node.value) {
            node.rigth = this._insert(node.rigth, value);
        } else {
            return node; // O valor duplicado não é inserido
        }

        this.updateHeight(node);
        const balance = this.getBalanceFactor(node);

        // Casos de desbalanciamento
        if(balance > 1 && value < node.left.value) {
            return this.rotateRigth(node); // Esquerda-esquerda LL
        }

        if(balance < -1 && value < node.rigth.value) {
            return this.rotateLeft(node); // Direita-direita RR
        }

        if(balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRigth(node); // Esquerda-direita LE
        }

        if(balance < -1 && value < node.left.value) {
            node.rigth = this.rotateRigth(node.rigth);
            return this.rotateLeft(node); // Direita-esquerda RD
        }
    }

    // Exibir o percurso in-order
    inOrder(node = this.#root) {
        if(node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.rigth);
        }        
    }

        // Método para buscar um valor na árvore
    search(value) {
        return this._serachNode(this.#root, value);
    }

    // Metodo auxiliar para realizar a busca recursivamente
    _serachNode(node, value) {
        // Se o nó atual é null, o valor não está na árvore
        if(node === undefined) return false;

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

}

export {AvlTree};