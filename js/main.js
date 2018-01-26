//GAME INSTANCE
var game = new Game();
var restartButton;
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

function myFunction(){
    game.restartGame()
    $("#restart").remove();
    $("#gameover").remove();

}

