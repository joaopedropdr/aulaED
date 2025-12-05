class Buscas {
    static sequencia(arr, valoProcurado) {
        for(let i=0; i <arr.length; i++) {
            if(arr[i]===valoProcurado) {
                return i;
            }
        }
        return -1;
    }

    static binaria(arr, valoProcurado) {
        let inicio = 0;
        let fim = arr.length - 1;
        while(inicio <= fim) {
            let meio = Math.floor((inicio + fim) / 2);
            if(arr[meio] === valoProcurado) {
                return meio;
            } else if(arr[meio] < valoProcurado) {
                inicio = meio + 1;
            } else {
                fim = meio - 1;
            }
        }
        return -1;
    }

    static interpolação(arr, valoProcurado) {
        let inicio = 0;
        let fim = arr.length - 1;
        while(
            inicio <= fim &&
            valoProcurado >= arr[inicio] &&
            valoProcurado <= arr[fim]
        ) {
            if(inicio === fim) {
                return arr[inicio] === valoProcurado ? inicio : -1;
            } 

            const pos = inicio + Math.floor(
                ((valoProcurado - arr[inicio]) * (fim - inicio)) / (arr[fim] - arr[inicio])
            );
            if(arr[pos] === valoProcurado) {
                return pos;
            }

            if(arr[pos] < valoProcurado) {
                inicio = pos + 1;
            } else {
                fim=pos-1;
            }
        }
        return -1;
    }
}   
export {Buscas};