const boardSymbol = (cell, debug) => {
  if (debug || cell.hit) {
    if (cell.type === "small") return "🟠";
    if (cell.type === "large") return "🔵";
    if (cell.type === "empty") return "💦";
  }
  return "-";
};

const rowLabels = "ABCDEFGH";

const labelingRows = (index) => rowLabels[index];

const printBoard = (board, debug = false) => {
  const display = {};
  if (!Array.isArray(board)) {
    console.error("board is not an array", board);
    return;
  }

  for (let i = 0; i < board.length; i++) {
    if (!Array.isArray(board[i])) {
      console.error(`board [${i}] is not an array:`, board[i]);
    }
  }
  for (let row = 0; row < board.length; row++) {
    const rowSymbols = [];

    for (let col = 0; col < board[row].length; col++) {
      const cell = board[row][col];
      rowSymbols.push(boardSymbol(cell, debug));
    }

    display[labelingRows(row)] = Object.fromEntries(
      rowSymbols.map((symbol, i) => [i + 1, symbol]),
    );
  }

  console.table(display);
};

module.exports = { printBoard };
