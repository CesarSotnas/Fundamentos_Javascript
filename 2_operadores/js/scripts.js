// 1 - Number
console.log(2);

// 2 - Operações aritiméticas
console.log(2 + 4);
console.log(2 - 7);
console.log(2 * 35);
console.log(45 / 7);

// 3 - Special numbers
console.log(typeof Infinity);
console.log(typeof infinity);
console.log(12 * "asd");
console.log(typeof NaN);

// 4 - Strings
console.log('Texto com aspas simples');
console.log("Texto com aspas duplas");
console.log(`Texto com crase`);

// 5 - Símbolos especiais em strings
console.log('Testando a \n quebra de linha')
console.log('Espaçamento \t de tab')

// 6 - Concatenação
console.log("Oi, " + "tudo " + "bem?")

// 7 - Interpolação
let coisa = "Birulei"
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log(`Podemos exercutar qualquer coisa aqui: ${coisa}`);

// 8 - Boolean
console.log(30 > 10);
console.log(5 > 20);

// 9 - Comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// 10 - Idêntico
console.log(9 == "9");
console.log(9 === "9");
console.log(9 != "9");
console.log(9 !== "9");

// 11 - Operados lógicos
console.log(true && true);
console.log(true && false);
console.log((15 == 14 + 1) && 5 < 10);
console.log(5 > 2 && "Cesar" === 1);
console.log(5 > 2 || "Cesar" === 1);

// 12 - Empty values
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);

// 13 - Mudança de tipos (NUNCA USAR)
console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);