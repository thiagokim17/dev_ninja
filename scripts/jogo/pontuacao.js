class Pontuacao {
  constructor() {
    this.pontos = 0;
  }

  exibe() {
    textFont(fontTelaInicial);
    textAlign(RIGHT)
    fill('#fff')
    textSize(50);
    text(parseInt(this.pontos), width - 30, 50);

  }

  adicionarPonto() {
    this.pontos = this.pontos + 0.1;

  }

}