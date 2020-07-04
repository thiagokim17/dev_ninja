function setup() {
  createCanvas(windowWidth, windowHeight);

  jogo = new Jogo();
  jogo.setup();

  telaInicial = new TelaInicial();
  botaoGerenciador = new BotaoGerenciador('Iniciar', 
                                          width / 2, 
                                          height/2);

  cenas = {
    jogo,
    telaInicial
  };

  frameRate(30);
  somDoJogo.loop();
}

function keyPressed() {
  jogo.keyPress();
}

function draw() {
  cenas[cenaAtual].draw();
}