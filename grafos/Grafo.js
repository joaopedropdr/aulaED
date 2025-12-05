class Grafo {
    // Estrutura para armazenar seus vertices e conexões 
    #adjacencia = {};

    adicionarVertice(vertice){
        if(!this.#adjacencia[vertice]) {
            this.#adjacencia[vertice] = [];
        }
    }

    // Adiciona uma aresta entre dois vertices (não dirigidos)
    adicionarAresta(vertice1, vertice2){
        if(!this.#adjacencia[vertice1]) {
            this.adicionarVertice(vertice1);
        }

        if(!this.#adjacencia[vertice2]) {
            this.adicionarVertice(vertice2)
        }
        this.#adjacencia[vertice1].push(vertice2);
        this.#adjacencia[vertice2].push(vertice1);
    }

    // Remove uma aresta entre dois vertices
    removerAresta(vertice1, vertice2) {
        this.#adjacencia[vertice1] = this.#adjacencia[vertice1].filter(v => v !== vertice2);
        this.#adjacencia[vertice2] = this.#adjacencia[vertice2].filter(v => v !== vertice1);
    }

    // Remove um vertice e suas conexões
    removerVertice(vertice) {
        // ?. não permite a repetição se o array do vertice estiver vazio
        while(this.#adjacencia[vertice]?.length) {
            const adjacencia = this.#adjacencia[vertice].pop();
            this.removerAresta(vertice, adjacencia)
        }

        delete this.#adjacencia[vertice];
    }

    imprimirGrafo() {
        for(let vertice in this.#adjacencia) {
            console.log(`${vertice} -> ${this.#adjacencia[vertice].join(', ')}`);
        }
    }

    getAdj() {
        return this.#adjacencia;
    }
    
    // busca em Largura (Breadth-First-Search)
    // realiza uma busca em largura, explorando primeiro os vizinhos mais proximos, usando uma fila
    bfs(inicio) {
        const visitados = new Set();
        const fila = [inicio];
        const resultado = [];
        visitados.add(inicio);
        while(fila.length > 0) {
            const atual = fila.shift();
            resultado.push(atual);
            for(const vizinho of this.#adjacencia.get(atual)) {
                if(!visitados.has(vizinho.vertice)) {
                    visitados.add(vizinho.vertice);
                    fila.push(vizinho.vertice);
                }
            }
        }

        console.log("BFS: ", resultado.join(' -> '));
    }

} // Fim classe grafo
export {Grafo};



// import {Fila} from "../ExFilas/Fila.js";
// const Colors = {
//     white: 0,
//     gray: 1,
//     black: 2
// }
// const initializeColor = vertices => {
//     const color = {};
//     for(let i = 0; i < vertices.length; i++) {
//         color[vertice[i]] = Colors.white;
//     }
//     return color;
// }

// const breadthFirstSearch = (grafo, startVertex, callback) => {
//     const adjLista = grafo.getAdj();
//     const color = initializeColor(adjLista);
//     const fila = new Fila();
//     fila.enqueue(startVertex);
//     while(!fila.isEmpty()) {
//         const u = fila.dequeue();
//         const neighbors = adjLista[u];
//         color[u] = Colors.gray;
//         for(let i =0; i < neighbors.length; i++) {
//             const w = neighbors[i];
//             if(color[w] === Colors.white) {
//                 color[w] = Colors.gray;
//                 fila.enqueue(w);
//             }          
//         }

//         color[u] = Colors.black;
//         if(callback) {
//             callback(u);
//         }
//     }   
// }

// const printVertex = (value) => console.log("Vetor visitado " + value);

// breadthFirstSearch(grafo, 1, printVertex);

