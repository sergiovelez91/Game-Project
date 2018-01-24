function Box() {
  var index = Math.floor(Math.random() * questions.length);
  this.question = questions[index];
  console.log(this.question);
  var pregunta = $("<div>").text(this.question.text);
  // $("#board").append(pregunta);
  $(".preguntas").text(this.question.text);
  
}

$(document).keydown(function(e) {
  if (e.keyCode == 83 && question.positive_questions[index]) {  
    return true;
  }
  else if (e.keyCode == 78 && question.negative_questions[index]) {
    return true;
  }
  else {
    alert("Game Over")
  }
});




$("body").keydown(function(e){
  switch(e.keyCode){
      case 83: // YES
        arr.forEach(function(c){
          
        })
      break;
      case 78: // NO
        arr.forEach(function(c){
          
        })
      break;
  }
});


  

Box.prototype.checkAnswer = function(answer) {
  if (answer === this.question.correctAnswer) {
    console.log("Has ganado");
  } else {
    console.log("Has fallado");
  }
};

// keycode S = 83
// keycode N = 78
