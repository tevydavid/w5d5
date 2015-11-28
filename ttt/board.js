var Board = function() {
  this.winner = null;
  this.grid = new Array(3);
  for (var i = 0; i < 3; i++) {
    this.grid[i] = new Array(3);
  }
};

Board.prototype.print = function () {
  console.log(this.grid[0].join(" | "));
  console.log("--+--+--");
  console.log(this.grid[1].join(" | "));
  console.log("--+--+--");
  console.log(this.grid[2].join(" | "));
};

Board.prototype.wonHorizontal = function () {
  for (var i = 0; i < 3; i ++) {
    if (this.grid[i][0] && this.grid[i][0] === this.grid[i][1] && this.grid[i][1] === this.grid[i][2]) {
      this.winner = this.grid[i][0];
      return true;
    }
  }
  return false;
};

Board.prototype.wonVertical = function () {
  for (var i = 0; i < 3; i ++) {
    if (this.grid[0][i] && this.grid[0][i] === this.grid[1][i] && this.grid[1][i] === this.grid[2][i]) {
      this.winner = this.grid[0][i];
      return true;
    }
  }
  return false;
};

Board.prototype.wonDiagonal = function () {
  if (this.grid[1][1] && this.grid[0][0] === this.grid[1][1] && this.grid[1][1] === this.grid[2][2]) {
    this.winner = this.grid[0][0];
    return true;
  }
  else if (this.grid[1][1] && this.grid[0][2] === this.grid[1][1] && this.grid[1][1] === this.grid[2][0]) {
    this.winner = this.grid[0][2];
    return true;
  } else {
    return false;
  }
};

Board.prototype.won = function () {
  if (this.wonHorizontal() || this.wonVertical() || this.wonDiagonal()) {
    return true;
  } else {
    return false;
  }
};

Board.prototype.empty = function (pos){
  return !this.grid[pos[0]][pos[1]];
};

Board.prototype.placeMark = function (pos, mark){
  if (!this.empty(pos)){
    return false;
  }
  else{
    this.grid[pos[0]][pos[1]] = mark;
    return true;
  }
};


Board.prototype.hello = function(){
  console.log("hello!");
};

module.exports = Board;
