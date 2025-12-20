import { drawGrid, renderTable } from "./ui/game-render.js";
import { compareData, createRandomTable } from "./logic/game.js";
import { initSettings } from "./ui/settings-render.js";
import { initSettingsLogic } from "./logic/settings.js";

document.addEventListener('DOMContentLoaded', () => {    
    drawGrid();
    initSettings();
    initSettingsLogic();
})