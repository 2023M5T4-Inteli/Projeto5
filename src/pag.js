
// Seleciona a navbar
var navbar = document.querySelector("nav");

// Armazena a posição de rolagem anterior
var posicaoRolagemAnterior = window.pageYOffset;

// Adiciona um ouvinte de eventos para a rolagem da página
window.addEventListener("scroll", function() {
  // Verifica a posição de rolagem atual
  var posicaoRolagemAtual = window.pageYOffset;
  // Se a posição de rolagem atual for maior do que a posição anterior,
  // adiciona a borda inferior na navbar
  if (posicaoRolagemAtual > posicaoRolagemAnterior) {
    navbar.style.borderBottom = "2px solid #00C289";
  // Se a posição de rolagem atual for menor do que a posição anterior,
  // remove a borda inferior da navbar
  } else {
    navbar.style.borderBottom = "none";
  }
  // Atualiza a posição de rolagem anterior
  posicaoRolagemAnterior = posicaoRolagemAtual;
});
