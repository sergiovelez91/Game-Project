var positive_questions = [
  "Eres programador?",
  "Real Madrid fue campeón de liga 16-17",
  "Un Byte es igual a 8 bits",
  "Tim Berners Lee es el padre de la WEB",
  "Si a 2 le sumas su triple y le restas su mitad su valor es 7",
  "El animal terrestre mas rápido del mundo es el guepardo",
  'Edsger Dijkstra dijo: "Si la depuración es el proceso de eliminar errores,entonces la programación debe ser el proceso de introducirlos"',
  "Carmen de Mairena era un maromo",
  "El máximo goleador de la temporada 86/87 murió 10 años más tarde por comer unos mejillones en mal estado"
].map(function(p){
    return {
        text: p,
        answer: "YES"
    }
});

var negative_questions = [
  "El año tiene 51 semanas",
  "Michael Jackson sigue vivo",
  "Rojo y Amarillo = Verde",
  "España es la capital de Madrid",
  "Al final de la peli siempre ganan los malos",
  "HTML es un lenguaje de programación conocido"
].map(function(p){
    return {
        text: p,
        answer: "NO"
    }
});

var questions = positive_questions.concat(negative_questions);

console.log(questions);
