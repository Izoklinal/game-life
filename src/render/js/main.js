import { drawGrid, renderTable } from "./ui/game-render.js";
import { compareData, createRandomTable } from "./logic/game.js";
import { initSettings } from "./ui/settings-render.js";

document.addEventListener('DOMContentLoaded', () => {
    let grid = createRandomTable();
    renderTable(grid);
    drawGrid();
    initSettings();
    
    let iterations = 0;
    const gameRun = setInterval(() => {
        grid = compareData(grid);
        renderTable(grid);
        drawGrid();
        iterations++;
        console.log(iterations);
    }, 100);
})