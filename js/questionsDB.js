var positive_questions = [
  "Eres programador?",
  "Real Madrid fue campeón de liga 16-17",
  "Un Byte es igual a 8 bits",
  "Tim Berners Lee es el padre de la WEB",
  "Si a 2 le sumas su triple y le restas su mitad su valor es 7",
  "El animal terrestre mas rápido del mundo es el guepardo",
  'Edsger Dijkstra dijo: "Si la depuración es el proceso de eliminar errores,entonces la programación debe ser el proceso de introducirlos"',
  "Carmen de Mairena es un maromo",
  "El máximo goleador de la temporada 86/87 murió 10 años más tarde por comer unos mejillones en mal estado",
  "Una pelicula sin cortes dura mas en el cine que vista en casa",
  "Nunca se ha visto a un elefante saltando en vertical",
  "Mark Zuckerberg es daltónico. El fondo de Facebook es azul porque es el color que puede distinguir mejor",
  "Todos los insectos tienen seis patas.",
  "Samsung es el fabricante que mas móviles vendió en 2017",
  

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
  "HTML es un lenguaje de programación conocido",
  "La Gran Muralla China es la única obra que se ve desde el universo",
  "El ser humano pierde aproximadamente el 75% de calor corporal por la cabeza",
  "Si tiras un céntimo desde lo alto de un rascacielos, puedes atravesarle el cráneo a alguien.",
  "Por regla general las consultoras son un lugar cálido y agradable",
  "Una función con return nos devuelve 'undefined",


].map(function(p){
    return {
        text: p,
        answer: "NO"
    }
});

var questions = positive_questions.concat(negative_questions);