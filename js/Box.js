function Box() {
    this.question = ;
}



var item = items[Math.floor(Math.random()*items.length)];

//1) Seleccionar una pregunta aleatoria del array de preguntas(propiedad de BOX)
//2) Imprimir esa pregunta por consola(prototipo de BOX); checkAnswer()
//3) Crear una funcion a la que le pasamos una respuesta por parametro.
//   si es correcta has ganado
//   si no has fallado


// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//box.checkAnswer(response) true o false 