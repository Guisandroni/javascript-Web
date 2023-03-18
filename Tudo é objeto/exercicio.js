// nomeie 3 propriedades ou métodos de strings

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = Document.queryselector(".btn");
btn.Document
// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
// copia um texto para a área de transferência
navigator.clipboard
  .writeText("Este texto será copiado para a área de transferência.")
  .then(() => {
    console.log("Texto copiado para a área de transferência!");
  })
  .catch((err) => {
    console.error("Erro ao copiar texto para a área de transferência: ", err);
  });

// lê o texto atualmente na área de transferência
navigator.clipboard
  .readText()
  .then((text) => {
    console.log("Texto atual na área de transferência: ", text);
  })
  .catch((err) => {
    console.error("Erro ao ler texto da área de transferência: ", err);
  });
