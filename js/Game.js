function Game() {
  this.questions = [];
  this.board = $("#board");
  this.currentQuestion = 0;
  this.numberOfTotalQuestions = 10;
}
Game.prototype.startGame = function() {
    this.createQuestions();
    this.printQuestion();
}
Game.prototype.createQuestions = function (){
    for (var i = 0; i < this.numberOfTotalQuestions ; i++) {
        this.questions.push(new Box());
    }
}
Game.prototype.printQuestion = function (){
   this.board.append(this.questions[this.currentQuestion].questionDiv);
}   
 