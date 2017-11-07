// $( document ).ready(){

  //
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

// var counter = 0;
// $(".1").on("click",function(){
// for (counter = 0; counter<26; counter++){
//   if (counter % 2 === 0){
//     // counter++;
//     $(this).addClass("redCircle");
//   } else if (counter % 2 != 0) {
//     // counter++;
//     $(this).addClass("yellowCircle");
//   } else {
//     console.log("Error");
//   }
// }
// })









function changeTurn() {
   player1 = false;
   player2 = true;
}

  // function Connect4() {
  //
  //   //global variables
  //   let player1 = true;
  //   let player2 = false;
  //   //calling the bringGame function
  //   bringGame();

   //Main screen button which hides the button and will bring up the game
     function bringGame(){
       $("button").on('click', function(){
         $(this).hide();
         $(".GameArea").load();
       })
     }

     bringGame();
  //
  //   function redCircle() {
  //     $(".click").on('click', function(){
  //       var shape = $("[col1]")
  //       $(this).shape.css("",)
  //     })
  //   }
  // }

  // Connect4();
// }
