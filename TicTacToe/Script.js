// Initialize the game board and variables
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let currentPlayer = 'X'; // X always starts
let gameActive = true;

// Function to create the Tic Tac Toe grid
function createBoard() {
    const boardContainer = document.getElementById('board');
    boardContainer.innerHTML = ''; // Clear any existing board

    // Loop to create each cell
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;

            // Add click event to each cell
            cell.addEventListener('click', handleCellClick);
            boardContainer.appendChild(cell);
        }
    }
}

// Handle the click event for a cell
function handleCellClick(event) {
    if (!gameActive) return; // If the game is over, do nothing

    const cell = event.target;
    const row = cell.dataset.row;
    const col = cell.dataset.col;

    // If the cell is already filled, do nothing
    if (board[row][col] !== '') return;

    // Update the board array and display the player's symbol
    board[row][col] = currentPlayer;
    cell.textContent = currentPlayer;

    // Check for a winner
    if (checkWinner()) {
        gameActive = false;
        setTimeout(() => alert(`${currentPlayer} wins!`), 100);
        return;
    }

    // Switch to the next player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Function to check if there is a winner
function checkWinner() {
    // Check rows, columns, and diagonals for a winner
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
            return true; // Row win
        }
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
            return true; // Column win
        }
    }
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        return true; // Diagonal win (top-left to bottom-right)
    }
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        return true; // Diagonal win (top-right to bottom-left)
    }

    return false; // No winner yet
}

// Function to reset the game
function resetGame() {
    // Reset the board
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    gameActive = true;
    
    // Clear the board display
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.textContent = '');
}

// Add event listener to reset button
document.getElementById('resetButton').addEventListener('click', resetGame);

// Initialize the board when the page loads
createBoard();