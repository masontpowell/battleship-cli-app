const parseGuess = (input, size) => {
  const letters = "ABCDEFGH";
  const row = letters.indexOf(input[0]?.toUpperCase());
  const col = parseInt(input.slice(1), 10) - 1;

  if (row < 0 || row >= size || isNaN(col) || col < 0 || col >= size) {
    return null;
  }

  return [row, col];
};

const guessHandling = (board, input, callback) => {
  const coordinates = parseGuess(input, board.length);
  if (!coordinates) {
    callback("Invalid guess. Please input your guess like this - A1 or B4.");
    return null;
  }

  const [r, c] = coordinates;
  const cell = board[r][c];

  if (cell.hit) {
    callback("You have already got a hit there.");
    return null;
  }

  cell.hit = true;

  if (cell.type !== "empty") {
    callback("You hit a ship!");
    return true;
  } else {
    callback("You missed.");
    return false;
  }
};

module.exports = {
  guessHandling,
};
