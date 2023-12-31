"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _console;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// REST
function somar() {
  var soma = 0;
  for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
}
console.log(somar(10, 20, 60, 30));
function somarComRest() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }
  var soma = nums.reduce(function (total, numeroAtual) {
    total += numeroAtual;
    return total;
  }, 0);
  return soma;
  /* OU
  const soma = 0;
  nums.forEach(function(Item, posicao) {
      soma += Item
  })
  return soma */
}

console.log(somarComRest(30, 30, 40, 15));

// SPREAD 
var numeros = [1, 2, 3, 4];
(_console = console).log.apply(_console, numeros);
var timesDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'sao paulo'];
var timesDeFutebolDoRio = ['vasco', 'botafogo', 'flamengo', 'fluminense'];
var timesDeFutebol = [].concat(timesDeFutebolDeSp, timesDeFutebolDoRio);
console.log(timesDeFutebol);
var carroDaJulia = {
  modelo: 'gol',
  marca: 'vw',
  motor: 1.6
};
var carroDaAna = _objectSpread(_objectSpread({}, carroDaJulia), {}, {
  /*Pega propriedades do outro e só sobescreve a que vai mudar*/
  motor: 1.8
});

// Desestruturação