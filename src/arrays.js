const redesSociais = ["Facebook", "Instagram", "Twitter"];

for (let i = 0; i < redesSociais.length; i++) { /*Sem ES6*/
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ["Gustavo", "Julia", "Paula", "Wagner"];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Front-end'
    }
})

console.log(alunos2);

const paula = alunos2.find(function(item) {
    return item.nome == 'Paula'
})
console.log(paula);

const IndiceDapaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula'
})
console.log(IndiceDapaula);

// every
alunos2.push({
    nome: 'Lucio',
    curso: 'Back-end'
})

const todosAlunosSaoDeFrontEnd = alunos2.every(function(item) {
    return alunos2.curso === 'Front-end'
})
console.log(todosAlunosSaoDeFrontEnd);

const existeAlgumAlunoBackEnd = alunos2.some(function(item){
    return item.curso === 'Back-end' && item.curso === 'Front-end'
})
console.log(existeAlgumAlunoBackEnd);

const alunosDeBackEnd = alunos2.filter(function(item) {
    return item.curso === 'Back-end'
})
console.log(alunosDeBackEnd);

const nums = [10, 20, 30, 10];

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual;
    return acumulador;
}, 0)

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')
console.log(nomesDosAlunos);