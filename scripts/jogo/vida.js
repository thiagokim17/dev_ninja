class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;

    this.xInicial = 10;
    this.y = 20;
  }

  draw() {
    for (let i = 0; i < this.vidas; i++) {
      const posicao = comprimentoVidaReal * i;

      image(imagemVida,
        posicao,
        10,
        comprimentoVidaReal,
        alturaVidaReal,
        matrizVida[0],
        0,
        comprimentoVida,
        alturaVida);
    }
  }
  
  ganhaVida() {
    if(this.vidas <= this.total){
      this.vidas++;
    }
  }
  
  perdeVida() {
    this.vidas--;
  }

}