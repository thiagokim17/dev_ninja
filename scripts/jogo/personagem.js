class Personagem extends Animacao {
  constructor(imagem,
    x,
    y,
    variacaoY,
    largura,
    altura,
    matriz,
    larguraSprite,
    alturaSprite,
    imagemJumpFall) {
    super(
      imagem,
      x,
      y,
      variacaoY,
      largura,
      altura,
      matriz,
      larguraSprite,
      alturaSprite);


    this.larguraInicial = largura;
    this.larguraSpriteInicial = larguraSprite;
    this.runImagem = imagem;
    this.matrizInicial = matriz;

    this.imagemJumpFall = imagemJumpFall;

    this.yIicial = height - this.altura - this.variacaoY;
    this.y = this.yIicial;

    this.yAnterior = 0;
    this.velocidadeDoPulo = 0;
    this.gravidade = 2;
    this.contadorPulo = 1;

    this.invencivel = false;
  }

  pula() {
    if (this.y == this.yIicial) {
      this.contadorPulo = 1;
    }

    if (this.contadorPulo <= 2) {
      this.velocidadeDoPulo = -25;
      this.mudaSprite('pulo');
      this.contadorPulo++;
      return true;
    }

    return false;

  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;

    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.yAnterior < this.y) {
      this.mudaSprite('fall');
    }

    if (this.y > this.yIicial) {
      this.y = this.yIicial;
      this.mudaSprite('inicial');
    }

    this.yAnterior = this.y;
  }

  tornaInvencivel() {
    this.invencivel = true;

    setTimeout(() => {
      this.invencivel = false;
    }, 1000)

  }

  estaColidindo(inimigo) {
    if (this.invencivel) {
      return false;

    }

    const precisao = .6
    const precisaoPixel = 20

    const colisao = collideRectRect(
      this.x + precisaoPixel,
      this.y + precisaoPixel,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x + precisaoPixel,
      inimigo.y + precisaoPixel,
      inimigo.largura * precisao,
      inimigo.altura * precisao);

    return colisao;
  }

  mudaSprite(tipo) {
    if (tipo == 'inicial') {
      this.imagem = this.runImagem;
      this.matriz = this.matrizInicial;
      this.largura = this.larguraInicial;
      this.larguraSprite = this.larguraSpriteInicial;

    } else if (tipo == 'pulo') {
      this.imagem = this.imagemJumpFall;
      this.matriz = [0, 0, 0, 0, 0];
      this.largura = 67;
      this.larguraSprite = 67;

    } else if (tipo == 'fall') {
      this.imagem = this.imagemJumpFall;
      this.matriz = [67, 67, 67, 67, 67];
      this.largura = 67;
      this.larguraSprite = 67;

    }


  }

}