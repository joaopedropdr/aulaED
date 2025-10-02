import {Bau} from './Bau.js';

const bau = new Bau;

bau.adicionar('Ouro');
bau.adicionar('prata');
bau.adicionar('cobre');

bau.remover();
bau.verUltimo();
console.log(bau.conferir());
bau.remover();
bau.remover();
console.log(bau.conferir());

