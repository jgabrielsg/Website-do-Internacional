// Seleciona a imagem do Inter
const interLogo = document.getElementById('inter-logo');

// Cria um novo elemento de áudio e define o URL do arquivo do hino do Inter
const interHino = new Audio('hinoInter.mp3');

// Define o evento de clique para a imagem do Inter
interLogo.addEventListener('click', function() {
  // Toca o hino do Inter
  interHino.play();
});

interLogo.addEventListener('click', function() {
    // Toca o hino do Inter
    const interText = document.querySelector('#inter-text');
    interText.textContent = 'É o inter!';
});

const codigoForma = document.getElementById("codigo-forma");

function exibirCodigoForma(idForma) {
  const forma = document.getElementById(idForma);
  const codigo = forma.outerHTML;
  codigoForma.textContent = codigo;
}

const retangulo = document.getElementById("ceu");
retangulo.addEventListener("click", function() {
  exibirCodigoForma("ceu");
});

const circulo = document.getElementById("sol");
circulo.addEventListener("click", function() {
  exibirCodigoForma("sol");
});

const pol = document.getElementById("areia");
pol.addEventListener("click", function() {
  exibirCodigoForma("areia");
});

const pol2 = document.getElementById("base1");
pol2.addEventListener("click", function() {
  exibirCodigoForma("base1");
});

const pol3 = document.getElementById("base2");
pol3.addEventListener("click", function() {
  exibirCodigoForma("base2");
});