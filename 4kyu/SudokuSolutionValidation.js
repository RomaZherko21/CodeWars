function validSolution(board) {
  for (let i = 0; i < board.length; i++) {
    let arr = Array.from(new Set(board[i]));
    if (arr.length !== board[i].length) return false;

    arr = [];
    for (let j = 0; j < board.length; j++) {
      arr.push(board[j][i]);
    }
    arr = Array.from(new Set(arr));
    if (arr.length !== board[i].length) return false;
  }

  for (let i = 0; i < board.length; i = i + 3) {
    for (let j = 0; j < board.length; j = j + 3) {
      let arr = [];
      for (let g = 0; g < 3; g++) {
        arr.push(board[i][j + g]);
        arr.push(board[i + 1][j + g]);
        arr.push(board[i + 2][j + g]);
      }
      arr = Array.from(new Set(arr));
      if (arr.length !== board[i].length) return false;
    }
  }
  return true;
}

console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
);
