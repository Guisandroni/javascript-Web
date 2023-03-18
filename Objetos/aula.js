let nomes = {
  nome01: "joao",
  nome02: "andre",
  nome03: "ana",
  ano: 2023,
  metadodoano() {
    return this.ano / 2;
  },
};
console.log(nomes.ano, nomes.nome01);

let circulo = {
  raio: 4,
  diametro: 8,
};
let formula = {
  formcircuferencia: 2 * Math.PI * circulo.raio,
};
var pi = Math.PI;
var circuferencia = formula.formcircuferencia;

nomes.adc = "tristana"; //adcionando outro objeto a mesma classe de objetos ja existentes.

console.log(nomes.metadodoano() * 3); // retornando valor de uma função dentro de objeto.
function outronome() {
  return;
}
