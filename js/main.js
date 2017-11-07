// $( document ).ready(){

  //
  $('.click').on('click', function(){
    console.log('working');
    var input = $(".1");
    counter = 0;
    for (counter = 0;counter<26 ;counter++){
    if (counter % 2 === 0) {
      input.addClass("redCircle");
      console.log("This is red");
    } else if (counter % 2 != 0) {
      input.addClass("yellowCircle");
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
