function Connect4() {

//global variables

//calling the bringGame function
bringGame();


//Main screen button which hides the button and will bring up the game
function bringGame(){
  $("button").click(function(){
    $(this).hide();
    $(".GameArea").load();
  })
}



}












// hey there random comment

Connect4();
