$( document ).ready(function() {
    console.log( "ready!" );

  // Dont delete, this code works
  $('.click').on('click', function(){
    // console.log('working');

      // var $column1 = $(".column1-1");
      var playerTurn = 1;

      if (playerTurn === 1) {
        changeTurnColors();
        // $column1.html("").attr("class","yellowCircle");
        console.log("This is red");
      } else if (playerTurn !== 1) {
        changeTurnColors()
        // $column1.addClass("redCircle");
        console.log("this is red");
      } else {
        console.log("Error");
      }
  })
});


function changeTurnColors(){

  var $column1 = $(".column1-1")
  if (playerTurn = 1){
    $column1.addClass("redCircle");
  } else {
    playerTurn = !playerTurn;
    $column1.addClass("yellowCircle")
  }
}

// Set up function that alternates the players go after each click
// var player1 = true;
// var player2 = false;
// var arr = [false,false,false,false];
//
// function changeTurn(){
//   $(".click").on("click",function(){
//
//   })
// }




// Each click of a button changes the colour

// var player = true;
// function switchPlayer() {
//  player = !player;
//}

// Each column is an array with 4 values - eg. var array1 = [false, false, false, false], var array2 = [false, false, false, false] etc.
// A message at the side of the screen displays who's turn it is (red or yellow)
// That message is determined by a simple function that switches between red and yellow
// at the bottom of each of the columns is a button that uses a function to determine a) which box gets filled b) with which color
// the function loops through the array and a) adds the circle (determined byt the above statement) and b) replaces only the first 'false' value it comes to with true. Then the loop stops.

// Click button
// Loop through column (all set to false to start)
// IF false -> set to true, add class*, stop loop




//   var x = true;
//   var y = false;
//
//
//
//
// function firstColumn(){
//   $('.click').on('click', function(){
//     var input = $(".1");
//     input.each(function(index){
//       for (var index = 0; index < input.length; index++){
//
//           switch (index) {
//             case (index=== 0):
//                   changeTurn();
//                   break;
//             case (index ===1):
//                   var x = false;
//                   var y = true;
//                   changeTurn()
//                   break;
//             case (index ===2):
//                   changeTurn();
//             case (index ===3):
//                   var x = false;
//                   var y = true;
//                   changeTurn();
//                   break;
//             default:
//                   console.log("There was an Error");
//             }
//         // else if (index % 2 != 0) {
//         //   changeTurn();
//         //   $(this).html("").attr("class","yellowCircle");
//         // } else {
//         //   console.log("Error");
//         // }
//       }
//     })
//   })
// }
//
// firstColumn();
//
// //changes the turn of the players
// function changeTurn() {
//   if ((x = true) && (y = false)){
//     $(this).html("").attr("class","redCircle");
//   } else if ((x = false) && (y = true)) {
//     $(this).html("").attr("class","yellowCircle");
//   }
// }
//
// changeTurn();
//
//
//
//    //Main screen button which hides the button and will bring up the game
//     //  function bringGame(){
//     //    $("button").on('click', function(){
//     //      $(this).hide();
//     //      $(".GameArea").load();
//     //    })
//     //  }
//      //
//     //  bringGame();
