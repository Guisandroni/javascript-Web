// Crie uma função para verificar se um valor é Truthy
function diadasemana(dia) {
  if (dia === "segunda") {
    return true;
  } else {
    return false;
  }
}

console.log(diadasemana("terça"));
// Crie uma função matemática que retorne o perímetro de um quadrado
function perimetro(lado) {
  valor = lado * 4;
  return valor;
}

console.log(perimetro(10));
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par

function numero(numero) {
  var modulo = numero % 2;
  if (modulo == 0) {
    return "o número : " + modulo + " é par ";
  } else {
    return "o número : " + modulo + " é impar";
  }
}

console.log(numero(3));
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipodedado(dado) {
  return typeof dado;
}
console.log("o tipo de dado é " + tipodedado());

// addEventListener é uma função nativa do JavaScript

// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("rolar", function () {
  console.log("asd");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
console.log(precisoVisitar(20), jaVisitei(20));

function nomecompleto(nome, sobrenome) {
  return `meu nome é ${nome} ${sobrenome}`;
}
console.log(nomecompleto("guilherme", "sandroni"));
