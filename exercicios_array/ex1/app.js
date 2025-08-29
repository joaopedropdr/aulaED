// EX 1
const MeuArray = require('./MeuArray.js');
const tarefas = new MeuArray();

tarefas.adicionar("Levantar requisitos");
tarefas.adicionar("Terminar os prototipos");
tarefas.adicionar("Terminar a tabela de gastos semanais");
tarefas.adicionar("BOOLINN");
tarefas.adicionar("Demitir headOverCuck");

tarefas.verTarefas();

tarefas.remover();
tarefas.verTarefas();

