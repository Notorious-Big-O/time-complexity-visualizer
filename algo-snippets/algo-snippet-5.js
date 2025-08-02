import { testAlgo } from "../utils/datasets.js";
function solveNQueens(n) {
  const board = Array(n).fill().map(() => Array(n).fill('.'));
  const solutions = [];

  function isSafe(row, col) {
    // Check column
    for (let i = 0; i < row; i++)
      if (board[i][col] === 'Q') return false;

    // Check diagonals
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
      if (board[i][j] === 'Q') return false;

    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++)
      if (board[i][j] === 'Q') return false;

    return true;
  }

  function backtrack(row) {
    if (row === n) {
      solutions.push(board.map(r => r.join('')));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = 'Q';
        backtrack(row + 1);
        board[row][col] = '.';
      }
    }
  }

  backtrack(0);
  return solutions;
}

testAlgo(solveNQueens)