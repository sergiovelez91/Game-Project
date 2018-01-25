function Game() {
  this.questions = [];
  this.board = $("#board");
  this.gameOverDiv = 0;
}
Game.prototype.startGame = function() {
  this.createQuestion();
  this.printQuestion();
};
Game.prototype.createQuestion = function() {
  this.questions.push(new Box());
};
Game.prototype.printQuestion = function() {
  this.board.append(this.questions[this.questions.length - 1].questionDiv);
};
Game.prototype.printGameOverDiv = function(){

}
Game.prototype.restartGame = function(){
    game = new Game();
}
Game.prototype.isGameOver = function(answer) {
  console.log(this.questions[this.questions.length - 1].checkAnswer(answer));
  if (this.questions[this.questions.length - 1].checkAnswer(answer)) {
    $("#remove").remove();
    this.createQuestion();
    this.printQuestion();
  } else {
    $("#remove").remove();
    console.log("Game Over");
    this.board.append($("<div id= 'gameover'>").text('Game Over'));

    // this.restartGame();
    // this.startGame();
  }
};

