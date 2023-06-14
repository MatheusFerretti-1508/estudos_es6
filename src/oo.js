class Pokemon {
    #hp = 100
    nome = ''
    tipo = ''
    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }
    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
    }
    recebeuAtaque() {
        this.hp -= 10;
    }
    exibeHp() {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Elétrico')
    }
    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`);
    }
}
const pikachuDoAsh = new Pikachu();
const pikachu = new Pokemon('Pikachu','Elétrico');

pikachuDoAsh.recebeuAtaque();
console.log(pikachuDoAsh.hp)
pikachuDoAsh.atacar();