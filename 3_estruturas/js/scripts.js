// 1 - Variáveis
console.log("1 - Variáveis")
let nome = "Cesar Santos";

console.log(nome)

nome = "Cesar";

const idade = 37;

console.log(idade);

// 2 - Mais sobre variáveis
    //let 2teste = "inválido"
    //let @teste = "inválido"

let a = 10, b = 20, c = 30;

console.log(a, b, c);

const nomecompleto = "Cesar Santos";

const nomeCompleto = "João Silva";

console.log(nomecompleto);
console.log(nomeCompleto);

// 3 - Prompt
console.log("3 - Prompt")
const age = prompt("Digite a sua idade");

// 4 - Alert
console.log("4 - Alert")
alert(`Sua idade é: ${age}`);

// 5 - Math
console.log("5 - Math")
console.log(Math.max(5, 2, 1, 10));
console.log(Math.floor(5.14));
console.log(Math.ceil(5.14));

// 6 - Console
console.log("6 - Console");
console.log("Teste");
console.error("Erro!");
console.warn("Aviso");

// 7 - If
const m = 10;

if (m > 5) {
    console.log("M é maior que 5!");
}

const user = "João";

if (user === "João") {
    console.log("Olá João");
}

if (user === "Maria") {
    console.log("Olá Maria");
}