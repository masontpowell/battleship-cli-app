const readline = require("readline-sync");
const { printBoard } = require("../ui/printBoard.js");
const { guessHandling } = require("./guessLogic.js");

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const youWinArt = `
========
__   _______ _   _   _    _ _____ _   _
\\ \\ / /  _  | | | | | |  | |_   _| \\ | |
 \\ V /| | | | | | | | |  | | | | |  \\| |
  \\ / | | | | | | | | |/\\| | | | | . ' |
  | | \\ \\_/ / |_| | \\  /\\  /_| |_| |\\  |
  \\_/  \\___/ \\___/   \\/  \\/ \\___/\\_| \\_/
========
`;

const gameLoop = async (board) => {
  let remaining = board.flat().filter((cell) => cell.type !== "empty").length;

  while (remaining > 0) {
    console.clear();
    printBoard(board, false);

    let validGuess = false;

    while (!validGuess) {
      const input = readline.question("Enter your guess (ex. A1): ");
      const result = guessHandling(board, input, (msg) => {
        console.log(msg);
      });

      if (result === null) {
        continue;
      }

      validGuess = true;

      if (result === true) remaining--;

      await wait(1000);
    }
  }

  console.clear();
  printBoard(board, false);
  console.log(youWinArt);
};

module.exports = { gameLoop };
