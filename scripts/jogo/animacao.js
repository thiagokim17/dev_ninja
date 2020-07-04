class Animacao {
  constructor(
    imagem,
    x,
    y,
    variacaoY,
    largura,
    altura,
    matriz,
    larguraSprite,
    alturaSprite) {
    this.matriz = matriz;
    this.imagem = imagem;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - y - this.variacaoY;
    this.largura = largura;
    this.altura = altura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;

    this.frameAtual = 0;
   
  }

  exibe() {
    image(this.imagem,
      this.x, // posição na tela x
      this.y, // posição na tela y
      this.largura, // quantos pixels na tela
      this.altura, // quantos pixels na tela
      this.matriz[this.frameAtual], // posição da imagem x
      0, // posição da imagem y
      this.larguraSprite, // quantos pixels 
      this.alturaSprite); // quantos pixels da imagem

    this.anima()
  }

  anima() {
    this.frameAtual++;

    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }

}