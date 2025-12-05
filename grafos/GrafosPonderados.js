class GrafosPontederados {
    #vertice = new Set();
    #adjacencia = new Map();

    // Adiciona um novo vertice ao grafo. Se ja existir, nada é feito.
    // Tambem inicializa sua lista de adjacencia
    adicionarVertice(v) {
        // Adiciona o vertice ao Set
        this.#vertice.add(v)
        // Inicializa sua lista adjacente 
        if(!this.#adjacencia.has(v)) return this.#adjacencia.set(v, [])
    }

    // Adicionar aresta ponderada entre dois vertices
    // Cria os vertices caso ainda não exista, Por padrão é um grafo direcionado
    adicionarAresta(origem, destino, peso) {
        if(!this.#adjacencia.has(origem)) this.adicionarVertice(origem);
        if(!this.#adjacencia.has(destino)) this.adicionarVertice(destino);
        this.#adjacencia.get(origem).push({vertice: destino, peso});
        // Se o grafo for não direcionado, descomente essa linha
        this.#adjacencia.get(destino).push({vertice: origem, peso});
    }
    imprimirGrafo() {
        for (const [v, vizinho] of this.#adjacencia.entries()) {
            const lista = vizinho.map(obj => `${obj.vertice}(${obj.peso})`).join(',');
            console.log(` ${v} -> ${lista}`);
        }
    }
    imprimirMatrizAdjacente() {
        const vertice = Array.from(this.#vertice);
        const n = vertice.length;
        const matriz = Array.from({length: n}, () =>Array(n).fill(Infinity))

        vertice.forEach((v, i) => {
            matriz[i][i] = 0; // Distancia para si mesmo = 0
            for(const vizinho of (this.#adjacencia.get(v))) {
                const j = vertice.indexOf(vizinho.vertice);
                matriz[i][j] = vizinho.peso;
            }
        });
        console.log("Matriz de Adjacência (valores infinitos representam ausência de aresta):");
        console.log(' ', vertice.join(' '));
        matriz.forEach((linha, i) => {
            console.log(vertice[i], linha.map(x => x=== Infinity ? '∞' : x).join(' '));
        });
    }

    // Busca por Profundidade (Depth-First-Search)
    // Realiza uma busca em profundidade, visitando o Vertice inicial e seus vizinho recursivamente até esgotar os caminhos
    dfs(inicio) {
        const visitados = new Set();
        const resultado = [];
        const visitar = (v) => {
            visitados.add(v);
            resultado.push(v);
            for(const vizinho of this.#adjacencia.get(v)) {
                if(!visitados.has(vizinho.vertice)) visitar(vizinho.vertice);
            }
        };

        visitar(inicio);
        console.log('DFS', resultado.join(' -> '));
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

    // Algoritimo de Dijkstra para encontrar o caminho mais curto
    // Calcula as menores distancias entre o vertice inicial e todos os demais
    // com base nos pesos das arestas.
    // Use a abordagem classica de Dijkstra
    dijkstra(inicio) {
        const distancia = [];
        const anteriores = {};
        const naoVisitados = new Set(this.#vertice);
        for(const v of this.#vertice) {
            distancia[v] = Infinity;
            anteriores[v] = null;
        }
        distancia[inicio] = 0;

        while(naoVisitados.size > 0) {
            // Encontra o vertice não visitado com a menor distancia conhecida
            const atual = [...naoVisitados].reduce((a, b) => 
                distancia[a] < distancia[b] ? a : b
            );
            naoVisitados.delete(atual);

            // Atualiza as distancias para vizinhos
            for(const vizinho of this.#adjacencia.get(atual)) {
                const alt = distancia[atual] + vizinho.peso;
                if(alt < distancia[vizinho.vertice]) {
                    distancia[vizinho.vertice] = alt;
                    anteriores[vizinho.vertice] = atual;
                }
            }
        }
        // Exibe o resultado
        console.log(`Menores distancias a partir de ${inicio}: `);
        for(const v of this.#vertice) {
            console.log(`${v}: ${distancia[v]}`);
        }
    }
}

export {GrafosPontederados};