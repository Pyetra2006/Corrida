function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#8BC34A");
  } else {
    background("#9C27B0");
  }
}

function desenhaJogadores() {
  textSize(40);
  text("😻", xJogador1, 50);
  text("👻", xJogador2, 150);
