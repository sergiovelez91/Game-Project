/*Creamos el constructor Box y le otorgamos distintos atributos. 
Con this.question nos referimos al array de objetos. 
Con questionNum nos referimos a la posición aleatoria del array questions */

function Box() {
  this.question = question;
  this.questionNum = questionNum;
}

/* Creamos los metodos(acciones) de nuestra caja. 
 getRandomArbitrary es la accion  de conseguir una pregunta aleatoria desde questionNum
 this.question es igual al valor questinNum dentro del array questions */

Box.prototype.getRandomArbitrary = function() {
  this.questionNum = Math.floor(Math.random() * questions.length);
  this.question = questions[this.questionNum];
  console.log(this.question)
  };

/* checkAnswer es el metodo que revisa si la respuesta dada se asocia o no con
la posicion correctAnswer del array de objetos */
Box.prototype.checkAnswer = function(answerUser) {
  if (answerUser === questions[this.questionNum].correctAnswer){
  console.log('Has ganado');
  } else {
    console.log('Has fallado')
  }

};

//1) Seleccionar una pregunta aleatoria del array de preguntas(propiedad de BOX)
//2) Imprimir esa pregunta por consola(prototipo de BOX); checkAnswer()
//3) Crear una funcion a la que le pasamos una respuesta por parametro.
//   si es correcta has ganado
//   si no has fallado

// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//var item = items[Math.floor(Math.random()*items.length)];
//box.checkAnswer(response) true o false
