let gameArea = document.querySelector(".game-area");
let areaConfig = document.querySelector("#area-config");
let etchConfig = document.querySelector("#etch-color");
let sketchConfig = document.querySelector("#sketch-color");
let resetButton = document.querySelector(".reset-button");

function drawGrid(value, etchColor, sketchColor) {
    cellWidth = (480/value) - 2;
    cellHeight = (480/value) - 2;
    for (let i = 0; i < value; i++) {
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        for (let j = 0; j < value; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.backgroundColor = sketchColor;
            cell.style.height = cellHeight + "px";
            cell.style.width = cellWidth + "px";
            cell.setAttribute("data-x", i);
            cell.setAttribute("data-y", j);
            newRow.appendChild(cell);
        }
        gameArea.appendChild(newRow);
    }
    allCells = document.querySelectorAll(".cell");
    allCells.forEach(cell => {
        cell.addEventListener("mouseover", function() {
            cell.style.backgroundColor = etchColor;
        });
    });
}

function removeGrid() {
    while (gameArea.firstChild) {
        gameArea.removeChild(gameArea.firstChild);
    }
}

areaConfig.addEventListener("change", (e) => {
    removeGrid();
    drawGrid(e.target.value, etchConfig.value, sketchConfig.value);
});

etchConfig.addEventListener("change", (e) => {
    let sketchColor = sketchConfig.value;
    removeGrid();
    drawGrid(areaConfig.value, e.target.value, sketchColor);
});

sketchConfig.addEventListener("change", (e) => {
    let etchColor = etchConfig.value;
    removeGrid();
    drawGrid(areaConfig.value, etchColor, e.target.value);
});

resetButton.addEventListener("click", () => {
    removeGrid();
    drawGrid(areaConfig.value, etchConfig.value, sketchConfig.value);
});



drawGrid(24, etchConfig.value, sketchConfig.value);