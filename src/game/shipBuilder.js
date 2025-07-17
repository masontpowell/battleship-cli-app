const { createEmptyBoard } = require("../utils/helper.js");

const numberOfShips = (size) => {
  if (size === 4) return { large: 1, small: 1 };
  if (size === 5) return { large: 1, small: 2 };
  if (size === 6) return { large: 2, small: 2 };
};

const placeShip = (board, shipType, shipId) => {
  const size = board.length;
  const shipLength = shipType === "small" ? 2 : 3;

  for (let attempts = 0; attempts < 100; attempts++) {
    const vertical = Math.random() < 0.5;
    const row = Math.floor(
      Math.random() * (vertical ? size - shipLength + 1 : size),
    );
    const col = Math.floor(
      Math.random() * (vertical ? size : size - shipLength + 1),
    );

    const coordinates = Array.from({ length: shipLength }, (_, i) => [
      vertical ? row + i : row,
      vertical ? col : col + i,
    ]);

    if (coordinates.some(([r, c]) => board[r][c].type !== "empty")) continue;

    console.log(`Placing ${shipType} ship (ID ${shipId}) at: `, coordinates);
    coordinates.forEach(([r, c]) => {
      board[r][c] = { type: shipType, id: shipId, hit: false };
    });

    return;
  }

  console.log("Was not able to place the ships");
};

const boardWithShips = (size) => {
  const board = createEmptyBoard(size);
  const { large, small } = numberOfShips(size);
  let shipId = 1;

  for (let i = 0; i < large; i++) placeShip(board, "large", shipId++);
  for (let i = 0; i < small; i++) placeShip(board, "small", shipId++);

  return board;
};

module.exports = {
  boardWithShips,
};
