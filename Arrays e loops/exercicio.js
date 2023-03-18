var anos = [1959, 1962, 1970, 1994, 2002];
console.log(anos);

var g = 0;
while (g <= anos.length) {
  console.log("brasil ganhou a copa de " + anos[g]);
  g++;
}

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

var i = 0;
while (i <= frutas.length) {
  console.log(frutas[i]);
  i++;
  if (frutas[i] == "Pera") break;
}
var frutinha = frutas[4];
