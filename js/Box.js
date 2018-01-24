function Box() {
  this.question = questions[ Math.floor(Math.random() * questions.length)];
  this.questionDiv = $("<div id='remove'>").text(this.question.text);
}
Box.prototype.checkAnswer = function(answer) {
  if (answer === this.question.answer) {
    console.log("Has ganado");
  } else {
    console.log("Has fallado");
  }
};