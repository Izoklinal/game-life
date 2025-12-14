import { drawGrid, renderTable } from "./render.js";
import { compareData, createRandomTable } from "./game.js";

document.addEventListener('DOMContentLoaded', () => {
    let grid = createRandomTable();
    renderTable(grid);
    drawGrid();
    
    let iterations = 0;
    const gameRun = setInterval(() => {
        grid = compareData(grid);
        renderTable(grid);
        drawGrid();
        iterations++;
        console.log(iterations);
    }, 100);
})