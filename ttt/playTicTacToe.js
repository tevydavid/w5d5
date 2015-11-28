var TTT = require("./index");
var Game = TTT.Game;

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

var game = new Game(reader);
game.play();
reader.close();
