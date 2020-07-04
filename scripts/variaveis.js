let jogo;
let telaInicial;
let cenaAtual = 'telaInicial';
let cenas;
let pontuacao;
let vida;
let fita;

const alturaVida = 603;
const comprimentoVida = 674.5;
const alturaVidaReal = 50;
const comprimentoVidaReal = 56;
const matrizVida = [
  0 * comprimentoVida,
  1 * comprimentoVida
];

let botaoGerenciador;

let fontTelaInicial;

let imagemTelaInicial;
let imagemVida;
let imagemCenarioSky;
let imagemCenarioBG;
let imagemCenarioBackTree;
let imagemCenarioFrontTree;
let imagemCenarioGround;
let imagemGameOver;

let cenarioSky;
let cenarioBG;
let cenarioBackTree;
let cenarioFrontTree;
let cenarioGround;

const margem = 30;

let imagemPersonagem;
let imagemJumpFall;
const alturaPersonagem = 124;
const comprimentoPersonagem = 79;
const fatorPersonagem = .637;
const matrizPersonagem = [
  0 * comprimentoPersonagem,
  1 * comprimentoPersonagem,
  2 * comprimentoPersonagem,
  3 * comprimentoPersonagem,
  4 * comprimentoPersonagem,
  5 * comprimentoPersonagem,
];

let imagemInimigo;
const alturaInimigo = 138;
const comprimentoInimigo = 90;
const fatorInimigo = .652;
const matrizInimigo = [
  0 * comprimentoInimigo,
  1 * comprimentoInimigo,
  2 * comprimentoInimigo,
  3 * comprimentoInimigo
];

let imagemInimigoGhost;
const alturaInimigoGhost = 138;
const comprimentoInimigoGhost = 75;
const fatorInimigoGhost = .543;
const matrizInimigoGhost = [
  0 * comprimentoInimigoGhost,
  1 * comprimentoInimigoGhost
];

let imagemInimigoBat;
const alturaInimigoBat = 138;
const comprimentoInimigoBat = 127;
const fatorInimigoBat = .92;
const matrizInimigoBat = [
  0 * comprimentoInimigoBat,
  1 * comprimentoInimigoBat,
  2 * comprimentoInimigoBat
];

let inimigos = [];

let cenario;
let somDoJogo;
let somDoPulo;

let personagem;
let inimigo;