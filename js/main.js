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

//game is running
var gameRunning = true;
var table = $("table tr");

function RedOrYellow(row,col,color){
  // gets the individual table cell by index in a table
  return table.eq(row).find("td").eq(col).find("button").attr("class",color);
}

function currentColor(row,col){
  return table.eq(row).find("td").eq(col).find("button").css("background-color");
}

//take a column and returns 
























































});
