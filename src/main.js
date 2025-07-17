const readline = require("readline-sync");
const { gameLoop } = require("./game/gameLoop.js");
const { boardWithShips } = require("./game/shipBuilder.js");

const boardOptions = ["4x4", "5x5", "6x6"];

const greeting = () => {
  console.log("Welcome to Battleship 🚢");
  const boardSelected = readline.keyInSelect(
    boardOptions,
    "Please choose a board size: ",
  );
  const boardSize = parseInt(boardOptions[boardSelected]);
  return boardSize;
};

const runGame = () => {
  const boardSize = greeting();
  const board = boardWithShips(boardSize);

  //  console.clear();
  gameLoop(board);
};

runGame();
