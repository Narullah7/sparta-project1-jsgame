$( document ).ready(function() {
  console.log( "ready!" );

  // global variables
  var player1 = true;
  var player1color = "blue";

  var player2 = false;
  var player2color = "yellow";

  // the rest button resets the board
  $(".reset").click(function(){
    location.reload();
  })


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

  // when the user clicks the main board
  $(".board button").on("click",function(){
    console.log("clicked");

    if (currentPlayer === 1){
      $("h3").html("Yellow's turn, pick a column to drop into.").addClass("displayWinner");
    } else if (currentPlayer !== 1) {
      $("h3").html("Blue's turn, pick a column to drop into").addClass("displayWinner");
    }

    var Chosen = $(this).closest("td").index();
    var bottomColumn = checkColumn(Chosen);

    RedOrYellow(bottomColumn,Chosen,currentColor);

    // browser prints the winner whenever they have matched either
    // vertically, horizontally or diagonally
    if (horizontalCheck() === true){
      $("h3").html("Well done " + currentColor + " you won, press the reset button to play again").addClass("displayWinner");
    } else if (verticalCheck() === true) {
      $("h3").html("Well done " + currentColor + " you won, press the reset button to play again").addClass("displayWinner");
    }else if (diagonalCheck() === true) {
      $("h3").html("Well done " + currentColor + " you won, press the reset button to play again").addClass("displayWinner");
    }

    currentPlayer = currentPlayer * -1

    if (currentPlayer === 1){
      currentColor = player1color;
    } else {
      currentColor = player2color;
    }
  })

  // check the winner if all columns are vertically, horizontally and diagonally the same.
  // except when the background-color = gray and if it goes out of the page.
  function Checkwinner(a,b,c,d) {
    return (a === b && a === c && a === d && a !== "rgb(128, 128, 128)" && a !== undefined);
  }

  // console log the winner
  function winner(rowInd,colInd){
    console.log("You won the game from " + rowInd + " to " + colInd );
    console.log(rowInd);
    console.log(colInd);
  }
  //checking horizontally.
  function horizontalCheck(){
    //checking the rows from index 0 to 4
    for (var i = 0; i< 5; i++){
      //checking the columns from index 0 to 4
      for (var j = 0; j < 5; j++) {
        if (Checkwinner(returnColor(i,j), returnColor(i,j+1), returnColor(i,j+2), returnColor(i,j+3))){
          winner(i,j);
          return true;
        } else {
          continue;
        }
      }
    }
  }

  //vertical winner
  function verticalCheck(){
    // checking the rows
    for (var i = 0; i < 5; i++) {
      // checking the columns
      for (var j = 0; j < 5; j++) {
        if ( Checkwinner(returnColor(i,j), returnColor(i+1,j), returnColor(i+2,j), returnColor(i+3,j)  ) ){
          winner(i,j);
          return true;
      } else {
        continue;
      }
    }
  }
}

// diagonal winner
function diagonalCheck(){
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if ( Checkwinner(returnColor(i,j), returnColor(i+1,j+1), returnColor(i+2,j+2),returnColor(i+3,j+3)) ) {
        winner(i,j);
        return true;
      } else if (Checkwinner(returnColor(i,j),returnColor(i-1,j+1),returnColor(i-2,j+2),returnColor(i-3,j+3) )) {
        winner(i,j);
        return true;
      } else {
        continue
      }
    }
  }
}






});
