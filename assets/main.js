var board = document.getElementById("board");
var button = document.getElementById("button");
var squares = document.getElementsByClassName("square");
// not sure why getElementsByTagName doesn't work

var count = 0;
var win = false;

// players
board.addEventListener("click", function(e) {
  var target = e.target;

  if (target.getAttribute("class") && !target.getAttribute("sel")) {

    if (!(count % 2)) {
      count += 1;
      target.innerHTML = "O";
      target.setAttribute("sel", "o");
      arrO.push(document.getElementById("id"));
      document.querySelector("h2").innerHTML = "Player X's turn";

    } else {
      count += 1;
      target.innerHTML = "X";
      target.setAttribute("sel", "x");
      arrX.push(document.getElementById("id"));
      document.querySelector("h2").innerHTML = "Player O's turn";

    }

    winner();

    if (arrO.length + arrX.length === 9) {
      document.querySelector("h2").innerHTML = "It's a tie";
      reset();
    }
  }
});


// win conditions
var arrO = [];
var arrX = [];

var winner = function() {
  if(document.getElementById("1").innerHTML === "X" &&
     document.getElementById("2").innerHTML === "X" &&
     document.getElementById("3").innerHTML === "X" ||

     document.getElementById("4").innerHTML === "X" &&
     document.getElementById("5").innerHTML === "X" &&
     document.getElementById("6").innerHTML === "X" ||

     document.getElementById("7").innerHTML === "X" &&
     document.getElementById("8").innerHTML === "X" &&
     document.getElementById("9").innerHTML === "X" ||

     document.getElementById("1").innerHTML === "X" &&
     document.getElementById("4").innerHTML === "X" &&
     document.getElementById("7").innerHTML === "X" ||

     document.getElementById("2").innerHTML === "X" &&
     document.getElementById("5").innerHTML === "X" &&
     document.getElementById("8").innerHTML ==="X" ||

     document.getElementById("3").innerHTML === "X" &&
     document.getElementById("6").innerHTML === "X" &&
     document.getElementById("9").innerHTML === "X" ||

     document.getElementById("1").innerHTML === "X" &&
     document.getElementById("5").innerHTML === "X" &&
     document.getElementById("9").innerHTML === "X" ||

     document.getElementById("3").innerHTML === "X" &&
     document.getElementById("5").innerHTML === "X" &&
     document.getElementById("7").innerHTML === "X")
  {
    alert("Player X win!");
    reset();
  }
  else if (document.getElementById("1").innerHTML === "O" &&
           document.getElementById("2").innerHTML === "O" &&
           document.getElementById("3").innerHTML === "O" ||

           document.getElementById("4").innerHTML === "O" &&
           document.getElementById("5").innerHTML === "O" &&
           document.getElementById("6").innerHTML === "O" ||

           document.getElementById("7").innerHTML === "O" &&
           document.getElementById("8").innerHTML === "O" &&
           document.getElementById("9").innerHTML === "O" ||

           document.getElementById("1").innerHTML === "O" &&
           document.getElementById("4").innerHTML === "O" &&
           document.getElementById("7").innerHTML === "O" ||

           document.getElementById("2").innerHTML === "O" &&
           document.getElementById("5").innerHTML === "O" &&
           document.getElementById("8").innerHTML === "O" ||

           document.getElementById("3").innerHTML === "O" &&
           document.getElementById("6").innerHTML === "O" &&
           document.getElementById("9").innerHTML === "O" ||

           document.getElementById("1").innerHTML === "O" &&
           document.getElementById("5").innerHTML === "O" &&
           document.getElementById("9").innerHTML === "O" ||

           document.getElementById("3").innerHTML === "O" &&
           document.getElementById("5").innerHTML === "O" &&
           document.getElementById("7").innerHTML === "O")
  {
    alert("Player O wins!");
    reset();
  }
};

// reset
function reset() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
    squares[i].removeAttribute("sel");
    arrX = [];
    arrO = [];
    count = 0;
  }
}

button.addEventListener("click", function() {
  reset();
});
