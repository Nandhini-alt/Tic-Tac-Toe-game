// Function to initialize the game board
function initializeGameBoard() {
    return [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
}

// Function to print the current state of the game board
function printGameBoard(board) {
    for (let i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
}

// Function to check if the current player has won the game
function checkWin(board, player) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
            return true;
        }
    }

    // Check diagonals
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    }

    return false;
}

// Function to check if the game board is full
function isBoardFull(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === "") {
                return false; // If any cell is empty, the board is not full
            }
        }
    }
    return true; // All cells are filled
}

// Main function
function main() {
    // Initialize the game board
    let board = initializeGameBoard();
    let currentPlayer = "X";

    while (true) {
        // Print the current state of the game board
        printGameBoard(board);

        // Display whose turn it is
        console.log(`It's ${currentPlayer}'s turn.`);

        // Ask the current player to input a row and column (1 to 3)
        const prompt = require('prompt-sync')();
        let row = parseInt(prompt("Enter row (1 to 3):")) - 1;
        let col = parseInt(prompt("Enter column (1 to 3):")) - 1;

        if (board[row][col] === "") {
            //mark the cell with the current player's symbol ("X" or "O")
            board[row][col] = currentPlayer;

            // Check for a win
            if (checkWin(board, currentPlayer)) {
                printGameBoard(board);
                console.log(`${currentPlayer} wins! Game Over.`);
                break;
            } else if (isBoardFull(board)) {
                printGameBoard(board);
                console.log("It's a draw! Game Over.");
                break;
            } else {
                // Switch players
                currentPlayer = (currentPlayer === "X") ? "O" : "X";
            }
        } else {
            console.log("Invalid move. Try again.");
        }
    }
}

// Call the main function to start the game
main();
