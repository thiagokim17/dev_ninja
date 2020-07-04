class Jogo {
  constructor() {
    this.indice = 0;

    this.mapa = fita.mapa;
    this.level = 1;
  }

  setup() {
    cenarioSky = new Cenario(imagemCenarioSky, 2);
    cenarioBG = new Cenario(imagemCenarioBG, 2);
    cenarioBackTree = new Cenario(imagemCenarioBackTree, 4);
    cenarioFrontTree = new Cenario(imagemCenarioFrontTree, 8);
    cenarioGround = new Cenario(imagemCenarioGround, 9);

    pontuacao = new Pontuacao();

    vida = new Vida(fita.configuracoes.vidaMaxima,
      fita.configuracoes.vidaInicial);

    const alturaPersonagemReal = height * .18;
    const comprimentoPersonagemReal =
      alturaPersonagemReal * fatorPersonagem;
    personagem = new Personagem(
      imagemPersonagem,
      margem, // posição na tela x
      alturaPersonagem, // posição na tela y
      margem,
      comprimentoPersonagem, // quantos pixels na tela
      height * .25, // quantos pixels na tela
      matrizPersonagem,
      comprimentoPersonagem, // quantos pixels 
      alturaPersonagem, // quantos pixels da imagem
      imagemJumpFall);

    console.log(width)
    console.log(comprimentoInimigo)

    const alturaInimigoReal = height * .22;
    const comprimentoInimigoReal = alturaInimigoReal * fatorInimigo;
    const inimigo = new Inimigo(
      imagemInimigo,
      width - comprimentoInimigo,
      alturaInimigoReal,
      margem,
      comprimentoInimigoReal,
      alturaInimigoReal,
      matrizInimigo,
      comprimentoInimigo,
      alturaInimigo,
      10
    );

    const alturaInimigoRealGhost = height * .18;
    const comprimentoInimigoRealGhost = alturaInimigoRealGhost * fatorInimigoGhost;
    const inimigoGhost = new Inimigo(
      imagemInimigoGhost,
      width - comprimentoInimigoGhost,
      alturaInimigoRealGhost,
      margem + 100,
      comprimentoInimigoRealGhost,
      alturaInimigoRealGhost,
      matrizInimigoGhost,
      comprimentoInimigoGhost,
      alturaInimigoGhost,
      12
    );

    const alturaInimigoRealBat = height * .13;
    const comprimentoInimigoRealBat = alturaInimigoRealBat * fatorInimigoBat;
    const inimigoBat = new Inimigo(
      imagemInimigoBat,
      width - comprimentoInimigoBat,
      alturaInimigoRealBat,
      margem + 220,
      comprimentoInimigoRealBat,
      alturaInimigoRealBat,
      matrizInimigoBat,
      comprimentoInimigoBat,
      alturaInimigoBat,
      15
    );

    inimigos.push(inimigo);
    inimigos.push(inimigoGhost);
    inimigos.push(inimigoBat);

  }

  keyPress() {
    if (key == 'ArrowUp') {
      if (personagem.pula()) {
        somDoPulo.play();
      }
    }
  }

  draw() {

    cenarioSky.exibe();
    cenarioSky.move();

    cenarioBG.exibe();
    cenarioBG.move();

    cenarioBackTree.exibe();
    cenarioBackTree.move();

    cenarioFrontTree.exibe();
    cenarioFrontTree.move();

    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    inimigo.velocidade = linhaAtual.velocidade * this.level;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
        this.level  = this.level + .3;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornaInvencivel();
      if (vida.vidas === 0) {
        image(imagemGameOver,
          width / 2 - width / 4,
          height / 2 - height / 4,
          width / 2,
          height / 5);
        noLoop();
      }
    }

    cenarioGround.exibe();
    cenarioGround.move();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    vida.draw();

  }

}