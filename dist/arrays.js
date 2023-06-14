"use strict";

var redesSociais = ["Facebook", "Instagram", "Twitter"];
for (var i = 0; i < redesSociais.length; i++) {
  /*Sem ES6*/
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ["Gustavo", "Julia", "Paula", "Wagner"];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Front-end'
  };
});
console.log(alunos2);
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula';
});
console.log(paula);
var IndiceDapaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula';
});
console.log(IndiceDapaula);

// every
alunos2.push({
  nome: 'Lucio',
  curso: 'Back-end'
});
var todosAlunosSaoDeFrontEnd = alunos2.every(function (item) {
  return alunos2.curso === 'Front-end';
});
console.log(todosAlunosSaoDeFrontEnd);
var existeAlgumAlunoBackEnd = alunos2.some(function (item) {
  return item.curso === 'Back-end' && item.curso === 'Front-end';
});
console.log(existeAlgumAlunoBackEnd);
var alunosDeBackEnd = alunos2.filter(function (item) {
  return item.curso === 'Back-end';
});
console.log(alunosDeBackEnd);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);