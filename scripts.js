let gameArea = document.querySelector(".game-area");

function drawGrid(width, height) {
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-x", i);
        cell.setAttribute("data-y", j);
        gameArea.appendChild(cell);
        }
    }
}

drawGrid(24,24);