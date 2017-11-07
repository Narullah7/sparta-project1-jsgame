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

  $('.click').on('click', function(){
     console.log('working');
     var input = $(".1").eq();
     for (input = 0; input<4 ; input++){
     if (input % 2 === 0) {
       $(".1").addClass("yellowCircle");
       console.log("This is red");
     } else if (input % 2 != 0) {
       $(".1").addClass("redCircle");
       console.log("this is yellow");
     } else {
       console.log("Error");
     }
   }
   });









//
// function changeTurn() {
//    player1 = false;
//    player2 = true;
// }



   //Main screen button which hides the button and will bring up the game
    //  function bringGame(){
    //    $("button").on('click', function(){
    //      $(this).hide();
    //      $(".GameArea").load();
    //    })
    //  }
     //
    //  bringGame();
