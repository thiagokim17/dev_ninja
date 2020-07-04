class TelaInicial {
  constructor() {

  }

  draw() {
    this._imagemFundo();
    this._texto();
    this._botao();
  }

  _imagemFundo() {
    image(imagemTelaInicial, 0, 0, width, height);

  }

  _texto() {
    textFont(fontTelaInicial);
    textSize(height * 0.1)
    textAlign(CENTER);
    text('As aventuras do', width / 2, height * 0.25);
    textSize(height * 0.15)
    text('Dev Ninja', width / 2, height * 0.37);

  }
  
  _botao(){
    botaoGerenciador.y = height * 0.50;
    botaoGerenciador.draw();
  }
}