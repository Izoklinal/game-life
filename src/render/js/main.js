import { drawGrid, renderTable } from "./ui/game-render.js";
import { compareData, createEmptyTable } from "./logic/game.js";
import { initSettings } from "./ui/settings-render.js";
import { initSettingsLogic } from "./logic/settings.js";
import { initDraw } from "./logic/draw.js";

document.addEventListener('DOMContentLoaded', () => {    
    const grid = createEmptyTable();
    renderTable(grid);
    drawGrid();
    initSettings();
    initSettingsLogic();
    initDraw();
})