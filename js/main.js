// $( document ).ready(){

  // Dont delete this code works
  // $('.click').on('click', function(){
  //   console.log('working');
  //   var input = $(".1").eq();
  //   for (input = 0; input<4 ; input++){
  //   if (input % 2 === 0) {
  //     $(".1").addClass("yellowCircle");
  //     console.log("This is red");
  //   } else if (input % 2 != 0) {
  //     $(".1").addClass("redCircle");
  //     console.log("this is yellow");
  //   } else {
  //     console.log("Error");
  //   }
  // }
  // });

  x = true;
  y = false;


  firstColumn();
function firstColumn(){
  $('.click').on('click', function(){
    $(".1").each(function(index){

    if ((index % 2 === 0)  ){
      changeTurn();
      $(this).html("").attr("class","redCircle");
    } else if (index % 2 != 0) {
      changeTurn();
      $(this).html("").attr("class","yellowCircle");
    } else {
      console.log("Error");
    }
    })
  })
}

//changes the turn of the players
function changeTurn() {
    x = !x;
    y = !y;
}

changeTurn();



   //Main screen button which hides the button and will bring up the game
    //  function bringGame(){
    //    $("button").on('click', function(){
    //      $(this).hide();
    //      $(".GameArea").load();
    //    })
    //  }
     //
    //  bringGame();
