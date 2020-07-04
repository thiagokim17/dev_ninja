function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta_2.png');
  imagemCenarioSky = loadImage('imagens/cenario/Sky.png');
  imagemCenarioBG = loadImage('imagens/cenario/BG_Decor.png');
  imagemCenarioBackTree = loadImage('imagens/cenario/Middle_Decor.png');
  imagemCenarioFrontTree = loadImage('imagens/cenario/Foreground.png');
  imagemCenarioGround = loadImage('imagens/cenario/Ground.png');

  imagemGameOver = loadImage('imagens/assets/game-over.png');

  imagemPersonagem = loadImage('imagens/personagem/run.png');
  imagemJumpFall = loadImage('imagens/personagem/jumpfall.png');

  imagemInimigo = loadImage('imagens/inimigos/skeletonNew.png');
  imagemInimigoGhost = loadImage('imagens/inimigos/ghost.png');
  imagemInimigoBat = loadImage('imagens/inimigos/bat.png');
  
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  fontTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');

  imagemVida = loadImage('imagens/assets/health.png');
  
  fita = loadJSON('fita/fita.json');
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}