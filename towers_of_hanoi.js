var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame() {
  this.stacks = [[3, 2, 1], [], []];

  function isWon() {
    return (this.stacks[0].length === 0 &&
      (this.stacks[1].length === 0 || this.stacks[2].length === 0));
  }

  function isValidMove(startTowerIdx, endTowerIdx) {
    if (startTowerIdx < 0 || startTowerIdx > 2 || endTowerIdx < 0 || endTowerIdx > 2) {
      return false;
    }
    else if (this.stacks[startTowerIdx].length === 0){
      return false;
    }
    else if (this.stacks[endTowerIdx].length === 0){
      return true;
    }
    else {
      return this.stacks[startTowerIdx].slice(-1) < this.stacks[endTowerIdx].slice(-1);
    }
  }

  function move(startTowerIdx, endTowerIdx) {
    if (isValidMove(startTowerIdx, endTowerIdx)){
      this.stacks[endTowerIdx].push(this.stacks[startTowerIdx].pop());
      return true;
    }
    else{
      return false;
    }
  }

  function print() {
    console.log("0: " + JSON.stringify(this.stacks[0]));
    console.log("1: " + JSON.stringify(this.stacks[1]));
    console.log("2: " + JSON.stringify(this.stacks[2]));
  }

  function promptMove(callback) {
    reader.question("Start index: ", function (numstr1) {
      reader.question("End index: ", function (numstr2) {
          var num1 = parseInt(numstr1);
          var num2 = parseInt(numstr2);

          callback(num1, num2);
      });
    });
  }

  function run(completionCallback) {
    print();

    promptMove(function(startIdx, endIdx) {
      if (!move(startIdx, endIdx)) {
        console.log("Invalid move. Try again.");
      }

      if (isWon()) {
        completionCallback();
        reader.close();
      }
      else {
        run(completionCallback);
      }
    });
  }

  run(function() {
    console.log("You won!");
  });
}

HanoiGame();
