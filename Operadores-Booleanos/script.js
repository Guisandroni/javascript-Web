var estudei = true;
var naoestudei = false;

if (naoestudei) {
  console.log("é verdade ele estudou");
} else if (naoestudei) {
  console.log("não, ele não estudou");
} else {
  console.log("não tenho certeza");
}
//valores anterior falso cai no else if , os 2 ultimos falsos cai no else
// se apenas o primeiro for verdadeiro vai direto pro if

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiDoutorado) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação, mas não possui doutorado
