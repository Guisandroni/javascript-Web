// Crie um objeto com os seus dados pessoais
const dados = {
  idade: 22,
  nome: "guilherme",
  sobrenome: "sandroni dias",
  cidade: "ibiuna",
  nomesobrenome: "Guilherme sandroni dias",
};
// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 3000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 5000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const cachorro = {
  raça: "labrador",
  color: "preto",
  idade: 10,
  late: function (pessoa) {
    if (pessoa == "homem") {
      return "au au au";
    } else {
      return "...";
    }
  },
};
