//GAME INSTANCE
var game = new Game();
game.startGame();
$(window).keypress(function(event){
    switch (event.key) {
        case "s":{
            game.isGameOver("YES")
        }
        break;
        case "n":{
            game.isGameOver("NO")
        }
        break;    
    }
});