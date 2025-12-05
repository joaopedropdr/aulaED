import { Feiticos } from '../Pilha.js';

const feitico = new Feiticos;

feitico.adicionar('A');
feitico.adicionar('B');
feitico.adicionar('C');
feitico.adicionar('D');
feitico.adicionar('E');

feitico.remover();
feitico.verTopo();
console.log(feitico.conferir());
feitico.remover();
feitico.remover();
feitico.remover();
feitico.remover();
console.log(feitico.conferir());
feitico.adicionar('F');
feitico.adicionar('G');
feitico.adicionar('H');
feitico.remover();
feitico.verTopo();
