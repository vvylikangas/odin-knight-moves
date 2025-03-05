function knightMoves(start, target) {
  // all possible moves
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

  // define valid range for moves
  const isValid = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;

  let queue = [[start]]; //
  let visited = new Set(); // keep track of visited positions

  while (queue.length) {
    let path = queue.shift(); // take first path from queue
    let [x, y] = path[path.length - 1]; // current position of the knight

    // check if target is reached
    if (x === target[0] && y === target[1]) {
      console.log(
        `=> You made it in ${path.length - 1} moves! Here's your path:`
      );
      path.forEach((move) => console.log(`[${move[0]}, ${move[1]}]`));
      return;
    }

    // loop through all possible moves
    for (let [dx, dy] of moves) {
      let nextPos = [x + dx, y + dy]; // calculate next position
      let key = nextPos.toString(); // use string version of position as key in visited set

      // check if move is valid and not visited
      if (isValid(nextPos) && !visited.has(key)) {
        visited.add(key); // add nextPos to visited to avoid re-check
        queue.push([...path, nextPos]); // add current path + next position to queue
      }
    }
  }
  return null; // should not reach here
}

// Example usage
knightMoves([0, 0], [3, 3]);
knightMoves([0, 0], [7, 7]);
knightMoves([3, 3], [4, 3]);
