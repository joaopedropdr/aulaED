const MeuArray = require('./MeuArray.js');

const funcionario = new MeuArray();

funcionario.adicionar("João Pedro");
funcionario.adicionar("Lucas");
funcionario.adicionar("Luiza");
funcionario.adicionar("Carla");

funcionario.nomeTerceiroParticipante();

funcionario.limpar();
