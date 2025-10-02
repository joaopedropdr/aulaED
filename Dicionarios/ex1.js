// usando object
const alunos = {};

alunos["250139"] = "João";
alunos["250140"] = "Lucas";
alunos["250141"] = "Luiza";

for(const chave in alunos) {
    console.log(`${chave} ${alunos[chave]}`);
}

// usando map
const aluno = new Map();
aluno.set("250139", "João");
aluno.set("250140", "Luiza");
aluno.set("250141", "Lucas");

for(const [chave, valor] of aluno) {
    console.log(`${chave}: ${valor}`);
}

