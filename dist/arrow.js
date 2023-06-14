"use strict";

var _this = void 0;
var minhaFuncao = function minhaFuncao() {
  return "Olá";
};
var retornaCarro = function retornaCarro() {
  return {
    modelo: 'Ka',
    fabricante: 'Ford'
  };
};
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    _this.velocidadeAtual -= 10;
  }
};
console.log(acelerar());
console.log(frear());
console.log(carro.velocidadeAtual);