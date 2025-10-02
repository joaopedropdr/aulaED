function dicionarios(dicionario) {
    for(const [chave, valor] of dicionario) {
        if(valor === undefined || valor === null) {
            dicionario.delete(chave);
        }
    }

}

const mapa = new Map();

mapa.set("Nome", "João");
mapa.set("Idade", );
mapa.set("Tamanho", );
mapa.set("Peso", );
mapa.set("Profissão", "Desenvolvedor");
mapa.set("Renda mensal", 25000);


for(const [chave, valor] of mapa) {
    console.log(`${chave}: ${valor}`);
}

dicionarios(mapa);
console.log("------------------")
for(const [chave, valor] of mapa) {
    console.log(`${chave}: ${valor}`);
}




