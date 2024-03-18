// 1 - Arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["Cesar", true, 2, 4.12, []];

console.log(itens);

// 2 - Mais sobre arrays
const arr = ["a", "b", "c", "d", "d"];

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[43]);

// 3 - Propriedades
const numbers = [5, 3, 4];

console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Cesar";

console.log(myName.length);

// 4 - Métodos
const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "Algum texto";

console.log(text.toLocaleUpperCase());
console.log(typeof text.toLocaleUpperCase);
console.log(text.indexOf("g"));

// 5 - Objetos
const person = {
    name: "Cesar",
    age: 37,
    job: "Empreendedor"
}

console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log( typeof person);

// 6 - Criando e deletando propriedades no objeto
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 - Criando e deletando propriedades no objeto
const obj = {
    a: "teste",
    b: true
};

console.log(obj instanceof Object);

const obj2 = {
    c: []
};

Object.assign(obj2, obj);

console.log(obj2)

// 8 - Conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));

// 9 Mutação
const a = {
    name: "Cesar"
};

const b = a;

console.log(a);
console.log(b)

console.log(a === b);

a.age = 31;

console.log(b);

delete b.age

console.log(a);

// 10 - Loop em array
const users = ["Matheus", "João", "Pedro", "Miguel"]

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário ${users[i]}`);
}

// 11 - Push e pop (Fim do array)
const array = ["a", "b", "c"];

array.push("d");

console.log(array);
console.log(array.length);

array.pop();
console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);
console.log(array);

array.push("z", "x", "y");

// 12 - Shift e unshift (Início do array)
const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift("p", "q", "r");
letters.unshift("z");

console.log(letters);

// 13 - IndexOf e lastIndexOf
const myElements = ["Morango", "Maçã", "Pera", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));

// 14 - Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);
console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);

// 15 - Foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "Javascript"},
    {title: "Terceiro post", category: "Python"}
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// 16 - Includes
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));
console.log(brands.includes("KIA"));

if (brands.includes("BMW")) {
    console.log("Há carros da marca BMW");
}

// 17 - Reverse
const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse();

console.log(reverseTest);

// 18 - Trim
const trimTest = "  Testando \n";

console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length);
console.log(trimTest.trim().length);

// 19 - Padstart
const testePadStart = "1";

const NewNumber = testePadStart.testePadStart(4, "0");

console.log(testePadStart);
console.log(NewNumber);

const testePadSEnd = NewNumber(10, "0");

console.log(testePadSEnd);

// 20 - Split
const frase = "O rato roeu a roupa do rei de roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 21 - Join
const fraseDeNovo = arrayDaFrase.join(" ");

console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}`;

console.log(fraseDeCompra);

// 22 - Repeat
const palavra = "Testando ";

console.log(palavra.repeat(5));

//23 - Rest operator
const somaInfita = (...args) => {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i]
    }

    return total;
}

console.log(somaInfita(1, 2, 3));
console.log(somaInfita(1, 20, 34, 43, 12, 2222, 6, 89));

// 24 - For of
const somaInfita2 = (...args) => {
    let total = 0;

    for (numFor of args) {
        total += numFor;
    }

    return total;
}

console.log(somaInfita2(1, 2, 13, 123, 676, 2));
console.log(somaInfita2(1, 20, 22, 43, 12, 123, 6, 899));

// 25 - Destructuring em objetos
const userDetails = {
    firstName: "Cesar",
    lastName: "Santos",
    job: "Empreendedor"
}

const { firstName, lastName, job} = userDetails;

console.log(firstName, lastName, job);

// renomear variáveis
const {firstName: primeiroNome, asd} = userDetails;

console.log(firstName);
console.log(asd);

// 26 - Destructuring em arrays
const myList = ["Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON
const myJson = '{"name": "Cesar", "age": 37, "skills": ["PHP", "Javascript", "Python"]}';

// 28 - JSON para objeto e objeto para JSON
const myObject = JSON.parse(myJson);

console.log(myObject);
console.log(myObject.name);
console.log(typeof myObject);

// json inválido
const badJson = '{"name": Jorge, "age": 31}';

const myBadObject = JSON.parse(badJson);

myObject.isOpenToWork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);
console.log(typeof myNewJson);