function Board() {
  this.winner = null;
  this.grid = new Array(3);
  for (var i = 0; i < 3; i++) {
    this.grid[i] = new Array(3);
  }

  function print() {
    console.log(this.grid[0].join(" | "));
    console.log("--+--+--");
    console.log(this.grid[1].join(" | "));
    console.log("--+--+--");
    console.log(this.grid[2].join(" | "));
  }

  function wonHorizontal() {
    for (i = 0; i < 3; i ++) {
      if (this.grid[i][0] === this.grid[i][1] && this.grid[i][1] === this.grid[i][2]) {
        this.winner = this.grid[i][0];
        return true;
      }
    }
    return false;
  }

  function wonVertical() {
    for (i = 0; i < 3; i ++) {
      if (this.grid[0][i] === this.grid[1][i] && this.grid[1][i] === this.grid[2][i]) {
        this.winner = this.grid[0][i];
        return true;
      }
    }
    return false;
  }

  function wonDiagonal() {
    if (this.grid[0][0] === this.grid[1][1] && this.grid[1][1] === this.grid[2][2]) {
      this.winner = this.grid[0][0];
      return true;
    }
    else if (this.grid[0][2] === this.grid[1][1] && this.grid[1][1] === this.grid[2][0]) {
      this.winner = this.grid[0][2];
      return true;
    } else {
      return false;
    }
  }

  function won() {
    if (wonHorizontal() || wonVertical() || wonDiagonal()) {
      return true;
    } else {
      return false;
    }
  }

  function empty(pos){
    return !this.grid[pos[0]][pos[1]];
  }

  function placeMark(pos, mark){
    if (!empty(pos)){
      return false;
    }
    else{
      this.grid[pos[0]][pos[1]] = mark;
      return true;
    }
  }


}

module.exports = Board;
