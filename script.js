let currentPlayer = "X";
let cells = document.querySelectorAll(".cell");
let message = document.getElementById("message");

function placeMarker(cellIndex) {
    if (!cells[cellIndex].innerHTML && !message.innerHTML) {
        cells[cellIndex].innerHTML = currentPlayer;
        if (checkWin()) {
            message.innerHTML = `Player ${currentPlayer} wins!`;
        } else if (checkTie()) {
            message.innerHTML = "It's a tie!";
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML;
    });
}

function checkTie() {
    return [...cells].every(cell => cell.innerHTML);
}

function reset() {
    cells.forEach(cell => cell.innerHTML = "");
    message.innerHTML = "";
    currentPlayer = "X";
}
