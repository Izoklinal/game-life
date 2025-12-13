import { drawGrid, renderTable } from "./render.js";
import { compareData, createRandomTable } from "./game.js";

document.addEventListener('DOMContentLoaded', () => {
    drawGrid();
    let grid = createRandomTable();
    renderTable(grid);
    
    let iterations = 0;
    const gameRun = setInterval(() => {
        grid = compareData(grid);
        renderTable(grid);
        iterations++;
        console.log(iterations);
    }, 1_000);
})