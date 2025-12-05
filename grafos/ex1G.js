import { Grafo } from "./Grafo.js";
const grafo = new Grafo();
// Vertices
grafo.adicionarVertice(1);
grafo.adicionarVertice(2);
grafo.adicionarVertice(3);
grafo.adicionarVertice(4);
// Arestas 
grafo.adicionarAresta(1, 2);
grafo.adicionarAresta(1, 3);
grafo.adicionarAresta(2, 4);
// Mostrar grafo
grafo.imprimirGrafo();
// REmovendo vertice
grafo.removerVertice(2);
// Mostrar grafo
grafo.imprimirGrafo();