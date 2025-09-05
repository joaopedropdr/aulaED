// EX 1
// const MeuArray = require('./MeuArray.js');
import { MeuArray } from "./MeuArray.js";
const tarefas = new MeuArray();

tarefas.adicionar("Levantar requisitos");
tarefas.adicionar("Terminar os prototipos");
tarefas.adicionar("Terminar a tabela de gastos semanais");
tarefas.adicionar("BOOLINN");
tarefas.adicionar("Demitir headOverCuck");

tarefas.verTamanho();

tarefas.verTarefas();

tarefas.remover();
tarefas.verTarefas();

