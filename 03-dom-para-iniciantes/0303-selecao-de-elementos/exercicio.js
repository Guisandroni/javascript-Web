// Retorne no console todas as imagens do site
let imagens = document.querySelectorAll("img");
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
let fotos = document.getElementsByTagName("imagem");
console.log(fotos);
let imagemanimais = document.querySelectorAll('img[src="img/imagem"]'); //Selecionar elemento de uma classe , serão todos!!
// Selecione todos os links internos (onde o href começa com #)
let links = document.querySelectorAll('[href="#"]');
console.log(links);
// Selecione o primeiro h2 dentro de .animais-descricao

// Selecione o último p do site
let ultimop = document.querySelectorAll("p");
console.log(ultimop[ultimop.length - 1]);
