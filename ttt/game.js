var Board = require("./board");

var Game = function (reader) {
  this.board = new Board();
  this.mark = 'X';
  this.reader = reader;
};

Game.prototype.play = function () {
  this.board.print();
  if (!this.board.won()) {
    this.promptPlayer();
  } else {
    console.log("Congrats " + this.board.winner);
  }
};


Game.prototype.promptPlayer = function() {
  this.reader.question("Enter row #: ", function (numString1) {
    this.reader.question("Enter col #: ", function (numString2) {
      var row = parseInt(numString1);
      var col = parseInt(numString2);
      var pos = [row, col];
      if (this.placeMark(pos, this.mark)) {
        this.switchMark();
      } else {
        console.log("Invalid play. Try again.");
      }
      this.play();
    });
  });
};

Game.prototype.switchMark = function () {
  if (this.mark === 'X') {
    this.mark = 'O';
  } else {
    this.mark = 'X';
  }
};



module.exports = Game;
