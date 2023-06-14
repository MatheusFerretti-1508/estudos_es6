let meuMap = new Map(); /*Criando*/
meuMap.set("nome", "gian") /*("Chave", "ValorDaChave")*/
meuMap.set("stack", "HTML, css, js")

console.log(meuMap)

const nome = meuMap.get("nome"); /*Pegando o valor de uma chave*/
console.log(nome)

console.log(meuMap.size); /*Verificando tamanho do map(quantas chaves)*/

console.log(meuMap.has("nome")); /*Verificando se o map tem determinada chave*/

for (let chave of meuMap.keys()) { /*For para recuperar chaves*/
    console.log(chave);
}
for (let valor of meuMap.values()) { /*For para recuperar valor*/
    console.log(valor);
}
for (let entradas of meuMap.entries()) {
    console.log(entradas);
}

meuMap.delete("stack"); /*Deletando item*/
console.log(meuMap);

const cpfs = new Set();
cpfs.add('92811369023');
cpfs.add('01957537043'); /*Numero nao comeca com zero, vai precisar tratar o caso*/
cpfs.add('59554996049');

console.log(cpfs);

cpfs.forEach((item) => {
    console.log(`O CPF é: ${item}`)
    })

const array = ["Gian", "Matheus", "Juliana", "Pedro", "Gian", "Pedro"] /*Retirando repetições de um array*/
const arrayComoSet = new Set([...array]);
console.log(arrayComoSet);
const arraySemItensDuplicados = [...arrayComoSet] /*Fazendo voltar a ser array*/
console.log(arraySemItensDuplicados);