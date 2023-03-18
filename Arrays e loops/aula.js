//É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
let nomes = ["joao", "julia", "ana", "gustavo"];
nomes[1];
nomes[3];
nomes[0];
nomes[5];

console.log(nomes[1]);
//Adiciona ao final da array
//.pop Remove o último item e retorna ele
//.push Adiciona ao final da array
//.length quantidade de caracteres propriedades da array
console.log(nomes.pop("ola"));
console.log(nomes.push("cardoso"));

//FOR LOOP
//Fazem algo repetidamente até que uma condição seja atingida.
/*for (var numero = 0; numero < 1000; numero++) {
  console.log(numero);
}*/
//mais comum
//while loop
var i = 10;
while (i < 0) {
  console.log(i);
  i++;
}
console.log(i);

nomes.forEach(function (item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente
nomes.forEach(function (index) {
  console.log(index);
});

console.log(nomes);
