import { GrafosPontederados } from "./GrafosPonderados.js";
const gp = new GrafosPontederados();

gp.adicionarAresta('São Paulo', 'Campinas', 1);
gp.adicionarAresta('Campinas', 'Curitiba', 4);
gp.adicionarAresta('São Paulo', 'Curitiba', 2);
gp.adicionarAresta('Curitiba', 'Florianopolis', 3);
gp.adicionarAresta('Florianopolis', 'Porto Alegre', 2);

gp.imprimirMatrizAdjacente();
gp.dijkstra('São Paulo');
gp.dfs('São Paulo');
gp.bfs('São Paulo');

