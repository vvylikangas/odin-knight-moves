function knightMoves(start, target) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const isValid = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;
}
