$( document ).ready(function() {
    console.log( "ready!" );

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

  // check the winner if all columns are vertically, horizontally and diagonally the same.
  // except when the background-color = gray and it goes out of the page.
  function Checkwinner(a,b,c,d) {
    return ((a === b) && (a === c) && (a === d) && (a !== "rgb(128, 128, 128)"))
  }

  // console log the winner
  function winner(rowInd,colInd){
  console.log("winner");
  }
  //checking vertically.
  function horizontalCheck(){
    //checking the rows from index 0 to 4
    for (var i = 0; i< 4; i++){
      //checking the columns from index 0 to 4
      for (var j = 0; i < 4; j++) {
        if (Checkwinner(returnColor(i,j), returnColor(i,j+1), returnColor(i,j+2), returnColor(i,j+3))){

        }
      }
    }
  }

});
