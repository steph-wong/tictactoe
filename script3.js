var board = document.getElementById("board");
var button = document.getElementById("button");
var squares = document.getElementsByClassName("square");
// not sure why getElementsByTagName doesn't work

var count = 0;

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

var winCond = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

var arrO = [];
var arrX = [];

// win alert
// check for winCond in arrX

function winner() {
  for (var i = 0; i < winCond.length; i++) {
    if (winCond[i].every(function(w) {
        return arrX.indexOf(w) !== -1;
      }))
// nd: double check every()!! - check values of all elements in array

    {
      alert("Player X Wins!");
      reset();

    } else if (winCond[i].every(function(w) {
        return arrO.indexOf(w) !== -1;
      })) {
        alert("Player O Wins!");
      reset();
    }
  }
}


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
