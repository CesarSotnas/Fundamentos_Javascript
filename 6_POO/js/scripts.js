// 1 - Métodos
const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au au")
    }
};

console.log(animal.nome);

animal.latir();

// 2 - Aprofundando em métodos
const pessoa = {
    nome: "Cesar",

    getNome: () => {
        return this.nome;
    },

    setNome: (novoNome) => {
        this.nome = novoNome;
    }
}

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Joaquim");
console.log(pessoa.getNome);

// 3 - Prototype
const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length);

console.log(Object.getPrototypeOf(arr));

// 4 - Mais sobre prototypes
const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);
console.log(mySecondObject.a);
console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - Classes básicas
const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao.patas);

const bulldor = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

// 6 - Função construtora como classe
function criarCachorro(name, raca) {
    const cachorro = Object.create({})

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro
};

const bob = criarCachorro("Bob", "Vira lata");
console.log(bob);
console.log(Object.getPrototypeOf(bob));

const jack = criarCachorro("Jack", "Poodle");
console.log(jack);
console.log(Object.getPrototypeOf(jack));

// 7 - Funções como classe
function Cachorro(name, raca) {
    this.nome = nome;
    this.raca = raca;
};

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);

// 8 - Métodos na função construtora
Cachorro.prototype.uivar = function() {
    console.log("Auuuuu!");
};

console.log(Cachorro.prototype);

husky.uivar();

// 9 - Classes es6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);
console.log(Object.getPrototypeOf(jeff));

// 10 - Mais sobre classes
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "Vermelha");

console.log(scania);
scania.descreverCaminhao();

Caminhao.motor = 4;

const c2 = new Caminhao(4, "Preta");

console.log(c2)
console.log(c2.motor);

Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6, "Azul");

console.log(c3.motor);

// 11 - Override
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

console.log(Humano.prototype.idade);

const cesar = new Humano("Cesar", 31);
console.log(cesar);

Humano.prototype.idade = "Não definida";

console.log(cesar.idade);
console.log(Humano.prototype.idade);