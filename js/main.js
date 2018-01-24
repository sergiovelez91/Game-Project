//GAME INSTANCE
var game = new Game();
game.startGame();
$(window).keypress(function(event){
    switch (event.key) {
        case "s":{
            game.questions[game.currentQuestion].checkAnswer("YES");
            game.currentQuestion+=1;
            game.printQuestion();
            $('#remove').remove();
        }
        break;
        case "n":{
            game.questions[game.currentQuestion].checkAnswer("NO");
            game.currentQuestion+=1;
            game.printQuestion();
            $('#remove').remove();
        }
        break;    
    }
});
