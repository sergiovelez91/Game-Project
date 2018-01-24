function Game() {
  this.preguntas = [];

  for (var i = 0; i < 10; i++) {
    this.preguntas.push(new Box());
  }
}