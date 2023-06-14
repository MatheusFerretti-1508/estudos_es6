const minhaFuncao = () => "Olá"

const retornaCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Ford',
})

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10;
    },
    frear: () => {
        this.velocidadeAtual -= 10;
    }
}

console.log(acelerar());
console.log(frear());

console.log(carro.velocidadeAtual)