function imc(altura, peso) {
  var imc = altura / peso;
  return imc;
}
imc(8.0, 100);

console.log(imc(8.0, 100));

function semana() {
  return "terça";
}

function mostraconsole() {
  console.log("oi");
}
addEventListener("click", mostraconsole);

function imc02(peso, altura) {
  const imc02 = peso / altura ** 2;
  console.log(imc02);
}
imc02(20, 1.8);

function terceiraidade(idade) {
  console.log(idade);
}
terceiraidade(80);

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}
corFavorita(); // retorna 'Você não gosta de nada'

let nota = 1;

function dinheiro(valor) {
  if (valor >= 10) {
    return " eu tenho dinheiro";
  } else {
    return " eu não tenho dinheiro";
  }
}
dinheiro(11);
console.log(dinheiro());

function dados() {
  let name = "gui";
  let idade = 22;
  function outrosdados() {
    let endereco = "ibiuna";
    let estado = "sp";
    return `${name}, ${idade}`;
  }
  return outrosdados();
}
dados();
//outrosdados();
console.log(dados());
