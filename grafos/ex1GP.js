import { GrafosPontederados } from "./GrafosPonderados.js";
const gp = new GrafosPontederados();

gp.adicionarAresta('A', 'B', 3);
gp.adicionarAresta('A', 'C', 2);
gp.adicionarAresta('B', 'D', 4);
gp.adicionarAresta('C', 'D', 1);
gp.adicionarAresta('D', 'E', 5);

gp.imprimirGrafo();
gp.imprimirMatrizAdjacente();
gp.dfs('A');
gp.bfs('A');
gp.dijkstra('A');






