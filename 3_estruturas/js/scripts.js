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

// 8 - Else
const loggeIn = false;

if (loggeIn) {
    console.log("Está autenticado");
} else {
    console.log("Não está autenticado");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
    console.log("Números mais altos");
} else {
    console.log("Os números não são mais altos");
}

// 9 - Else if
if (1 > 2) {
    console.log("Teste");
} else if (2 > 3) {
    console.log("Teste 2"); 
} else if (5 > 1) {
    console.log("Agora sim");
}

const userName = "Cesar";
const userAge = 37;

if (userName === "José") {
    console.log("Bem vindo José");
} else if (userName === "Cesar" && userAge === 37) {
    console.log("Nenhuma condição aceita");
}

// 10 - While
let p = 0
while (p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// 11 - Do while
let o = 10

do {
    console.log(`Valor de ${o}`);
    o--
} while (o > 1);


// 12 - For
for (let t = 0; t < 10; t++) {
    console.log(`repetindo a varirável: ${t}`);
}


// 13 - Identação
    // - Sem
for (let u = 0; u < 10; u++) {
if (u * 2 > 10) {
console.log(`Maior que 10! ${u}`);
} else {
if (u / 2 === 0) {
console.log("Deus 0");
}
}
}

    // - Com
for (let u = 0; u < 10; u++) {
    if (u * 2 > 10) {
        console.log(`Maior que 10! ${u}`);
    } else {
        if (u / 2 === 0) {
            console.log("Deus 0");
        }
    }
}

// 14 - Break
for (let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`);

    if (g === 12) {
        console.log(`O g é 12!`);
        break;
    }
}

// 15 - Continue
for (let s = 0; s < 10; s = s + 1) {
    // Operador de resto = %
    if (s % 2 == 0) {
        console.log("Número par!");
        continue;
    }
    console.log(s)
}

// 16 - Switch
const job = "Advogado"

switch(job) {
    case "Programador":
        console.log("Você é um programador!");
        break;
    case "Advogado":
        console.log("Você é um advogado!");
        break; 
    case "Engenheiro":
        console.log("Você é um engenheiro!");
        break;
    default:
        console.log("Profissão não encontrada");
}
