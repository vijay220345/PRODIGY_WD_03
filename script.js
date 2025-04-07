let currentPlayer = 'X';
let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

// Function that gets triggered when a cell is clicked
function cellClicked(index) {
  if (board[index] === ' ' && !checkWinner()) {
    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    
    if (checkWinner()) {
      message.textContent = `${currentPlayer} wins!`;
    } else if (board.every(cell => cell !== ' ')) {
      message.textContent = 'It\'s a draw!';
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      message.textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

// Function to check if a player has won
function checkWinner() {
  return winningCombos.some(combo => {
    return combo.every(index => {
      return board[index] === currentPlayer;
    });
  });
}

// Function to reset the game board
function resetBoard() {
  // Reset the board array
  board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  
  // Clear all cells' text
  cells.forEach(cell => {
    cell.textContent = '';
  });
  
  // Reset the message and current player
  message.textContent = 'Player X\'s turn';
  currentPlayer = 'X';
}
