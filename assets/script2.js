var board = document.getElementById("board");
var button = document.getElementById("button");
var squares = document.getElementsByClassName("square");
var marq = document.querySelector("h2");

var count = 0;
var arrX = [];
var arrO = [];

// players

board.addEventListener("click", function(y) {
  var target = y.target;

  if (target.getAttribute("class") && !target.getAttribute("sel")) {
    // double check
    if (!(count % 2)) {
      count += 1;
      target.innerHTML = "O";
      target.setAttribute("sel", "O");
      arrO.push(document.getElementById("id"));
      return marq.innerHTML = "Player X's turn";

    } else {
      count += 1;
      target.innerHTML = "X";
      target.setAttribute("sel", "X");
      arrX.push(document.getElementById("id"));
      return marq.innerHTML = "Player O's turn";
    }

    winner();

    if (arrO.length + arrX.length === 9) {
      return marq.innerHTML = "It's a tie!";
    }
  }
});


// win condition

function winner() {
  if (document.getElementById("1").innerHTML === "X" &&
    document.getElementById("2").innerHTML === "X" &&
    document.getElementById("3").innerHTML === "X") {
    alert("Player X wins!");

    } else if (
    document.getElementById("4").innerHTML === "X" &&
    document.getElementById("5").innerHTML === "X" &&
    document.getElementById("6").innerHTML === "X") {
      alert("Player X wins!");

    } else if (
    document.getElementById("7").innerHTML === "X" &&
    document.getElementById("8").innerHTML === "X" &&
    document.getElementById("9").innerHTML === "X") {
      alert("Player X wins!");

    } else if (
    document.getElementById("1").innerHTML === "X" &&
    document.getElementById("4").innerHTML === "X" &&
    document.getElementById("7").innerHTML === "X") {
      alert("Player X wins!");

  } else if (
    document.getElementById("2").innerHTML === "X" &&
    document.getElementById("5").innerHTML === "X" &&
    document.getElementById("8").innerHTML === "X") {
      alert("Player X wins!");

  } else if (
    document.getElementById("3").innerHTML === "X" &&
    document.getElementById("6").innerHTML === "X" &&
    document.getElementById("9").innerHTML === "X") {
      alert("Player X wins!");

  } else if (
    document.getElementById("1").innerHTML === "X" &&
    document.getElementById("5").innerHTML === "X" &&
    document.getElementById("9").innerHTML === "X") {
      alert("Player X wins!");

  } else if (
    document.getElementById("3").innerHTML === "X" &&
    document.getElementById("5").innerHTML === "X" &&
    document.getElementById("7").innerHTML === "X") {
     alert("Player X wins!");

  } else if (
    document.getElementById("1").innerHTML === "O" &&
    document.getElementById("2").innerHTML === "O" &&
    document.getElementById("3").innerHTML === "O") {
      alert("Player O wins!");

    } else if (
    document.getElementById("4").innerHTML === "O" &&
    document.getElementById("5").innerHTML === "O" &&
    document.getElementById("6").innerHTML === "O") {
      alert("Player O wins!");

    } else if (
    document.getElementById("7").innerHTML === "O" &&
    document.getElementById("8").innerHTML === "O" &&
    document.getElementById("9").innerHTML === "O") {
      alert("Player O wins!");

    } else if (
    document.getElementById("1").innerHTML === "O" &&
    document.getElementById("4").innerHTML === "O" &&
    document.getElementById("7").innerHTML === "O") {
      alert("Player O wins!");

    } else if (
    document.getElementById("2").innerHTML === "O" &&
    document.getElementById("5").innerHTML === "O" &&
    document.getElementById("8").innerHTML === "O") {
      alert("Player O wins!");

    } else if (
    document.getElementById("3").innerHTML === "O" &&
    document.getElementById("6").innerHTML === "O" &&
    document.getElementById("9").innerHTML === "O") {
      alert("Player O wins!");

    } else if (
    document.getElementById("1").innerHTML === "O" &&
    document.getElementById("5").innerHTML === "O" &&
    document.getElementById("9").innerHTML === "O") {
      alert("Player O wins!");

    } else if (
    document.getElementById("3").innerHTML === "O" &&
    document.getElementById("5").innerHTML === "O" &&
    document.getElementById("7").innerHTML === "O") {
     alert("Player O wins!");
     reset();
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
