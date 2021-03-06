function Game() {
  this.questions = [];
  this.board = $("#board");
  this.gameOverDiv = 0;
  this.gameActive = true;
  this.counter = 0;
  this.score = $("<div id= 'score'>").text('Score ' + this.counter);
  $("#board").append(this.score);
}
Game.prototype.startGame = function() {
  this.createQuestion();
  this.printQuestion();
  //this.counterScore();
};
Game.prototype.createQuestion = function() {
  this.questions.push(new Box());
};
Game.prototype.printQuestion = function() {
if(this.gameActive){
    this.board.append(this.questions[this.questions.length - 1].questionDiv);
}
};
Game.prototype.printGameOverDiv = function(){
    $("#gameover").remove()
    $("#restart").remove()
    this.board.append($("<div id= 'gameover'>").text('Game Over'));
    this.board.append($("<button id= 'restart' onclick='myFunction()'>").text('Restart'));
    
}

Game.prototype.updateCounter = function(){
    this.score.text('Score ' + this.counter)
}

Game.prototype.restartGame = function(){
    game = new Game();   
    game.startGame(); 
}
Game.prototype.isGameOver = function(answer) {
  if (this.questions[this.questions.length - 1].checkAnswer(answer)) {
    $("#remove").remove();
    this.createQuestion();
    this.printQuestion();
    this.counter++
    this.updateCounter()
    console.log(this.counter)
  } else {
    $("#remove").remove();  
    console.log("Game Over");
    this.printGameOverDiv();
    this.gameActive = false;
 }
};

