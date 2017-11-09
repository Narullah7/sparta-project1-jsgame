$( document ).ready(function() {
    console.log( "ready!" );

//   $(".click").on("click",function(){
//     console.log("Cliked");
//     var column = $(".column1");
//     var box1 = $(column[3]);
//     var box2 = $(column[2]);
//     var box3 = $(column[1]);
//     var box4 = $(column[0]);
//
//     counter++;
//     if (!box1.hasClass("redCircle") && !box1.hasClass("yellowCircle")){
//       box1.addClass("redCircle");
//     } else if (!box2.hasClass("redCircle") && // //         //    box2.hasClass("yellowCircle")) {
//       box2.addClass("yellowCircle");
//     } else if (!box3.hasClass("redCircle") && !box3.hasClass("yellowCircle")){
//       box3.addClass("redCircle");
//     } else if (!box4.hasClass("redCircle") && !box4.hasClass("yellowCircle")) {
//       box4.addClass("yellowCircle");
//     }
//   });
//
// function gameStart(){
//   YellowOrRedListener();
//
// }
//
//
// function YellowOrRedListener(){
//   $(".click").click(YellowOrRed);
// }
//
// function YellowOrRed(){
//
//   var column = $(".column1");
//   var box1 = $(column[3]);
//   var box2 = $(column[2]);
//   var box3 = $(column[1]);
//   var box4 = $(column[0]);
//
//
//   if (colum.html().length === 0){
//     if (counter % 2 ===0){
//
//     }
//   }
// }
//

// global variables
var player1 = true;
var player1color = "rgb(86, 151, 255)";

var player2 = false;
var player2color = "rgb(255, 255, 0)";


//game is running
var gameRunning = true;
var table = $("table tr");

function RedOrYellow(row,col,color){
  // gets the individual table cell by index in a table
  return table.eq(row).find("td").eq(col).find("button").css("background-color",color);
}

function returnColor(row,col){
  return table.eq(row).find("td").eq(col).find("button").css("background-color");
}

//checks a column and returns the one that is empty or background color = gray
function checkColumn(col){
  var colorChecker = returnColor(4,col);
  //starts checking from the bottom of the column first then checked the ones above it
  for (var i = 4; i > -1 ; i--) {
    colorChecker = returnColor(i,col);
    if (colorChecker === "rgb(128, 128, 128)"){
      return i
    }
  }
}
// start with player 1
var currentPlayer = 1;
var currentColor = player1color;

$(".board button").on("click",function(){
  var Chosen = $(this).closest("td").index();
  var bottomColumn = checkColumn(Chosen);

  RedOrYellow(bottomColumn,Chosen,currentColor);

  currentPlayer = currentPlayer * -1

  if (currentPlayer === 1){
    currentColor = player1color;
  } else {
    currentColor = player2color;
  }
})
























































});
