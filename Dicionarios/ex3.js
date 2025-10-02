const Produtos = {
    1: {
        nome: "Caderno",
        preco: 30
    },

    12: {
        nome: "Caneta",
        preco: 10
    },

    123: {
        nome: "Bolsa",
        preco: 150
    },

    1234: {
        nome: "Estojo",
        preco: 50
    }
};

for(const chave in Produtos) {
    if(Produtos[chave].preco >= 50) {
        console.log(`${Produtos[chave].nome}`);
    }
}




