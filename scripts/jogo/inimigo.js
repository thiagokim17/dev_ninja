class Inimigo extends Animacao {
  constructor(
    imagem,
    x,
    y,
    variacaoY,
    largura,
    altura,
    matriz,
    larguraSprite,
    alturaSprite,
    velocidade) {
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

    this.velocidade = velocidade;
    this.x = x;
  }

  move() {
    this.x = this.x - this.velocidade;
  }

  aparece() {
    this.x = width;

  }
}