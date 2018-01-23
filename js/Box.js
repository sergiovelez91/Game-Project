
function Box() {
  var index = Math.floor(Math.random() * questions.length);
  this.question = questions[index];
  console.log(this);
  var pregunta = $('<div>').text(this.question.text);
  $("#board").append(pregunta);
  
}


Box.prototype.checkAnswer = function(answer) {
  if (answer === this.question.correctAnswer) {
    console.log("Has ganado");
  } else {
    console.log("Has fallado");
  }
};