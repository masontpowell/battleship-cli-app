const createEmptyBoard = (size) => {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => ({ type: "empty", hit: false })),
  );
};

module.exports = {
  createEmptyBoard,
};
