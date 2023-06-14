// REST
function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma
}

console.log(somar(10,20,60,30))

function somarComRest(...nums) {
    let soma = nums.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total
    }, 0)
    return soma
    /* OU
    const soma = 0;
    nums.forEach(function(Item, posicao) {
        soma += Item
    })
    return soma */
}
console.log(somarComRest(30,30,40,15));

// SPREAD 
const numeros = [1,2,3,4]
console.log(...numeros)

const timesDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'sao paulo'];
const timesDeFutebolDoRio = ['vasco', 'botafogo', 'flamengo', 'fluminense'];

const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio];
console.log(timesDeFutebol);

const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6,
}
const carroDaAna = {
    ...carroDaJulia, /*Pega propriedades do outro e só sobescreve a que vai mudar*/
    motor: 1.8,
}

// Desestruturação
