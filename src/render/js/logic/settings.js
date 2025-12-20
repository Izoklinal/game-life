import { compareData, createRandomTable } from "./game.js";
import { renderTable, drawGrid } from "../ui/game-render.js";

export let tableSize = 100;
export let chanceOfAlive = 0.3;
export let frameMS = 100;
export let iterations = 0;

const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resumeBtn = document.getElementById('resume-btn');
const stepBtn = document.getElementById('step-btn');

let grid = createRandomTable();
let run;

export function initSettingsLogic() {
    startBtn.addEventListener('click', () => {
        renderTable(grid);
        iterations = 0;

        run = setInterval(() => {
            calcStep();
        }, 100);        
    });
    pauseBtn.addEventListener('click', () => {
        clearTimeout(run);
    });
    resumeBtn.addEventListener('click', () => {
        run = setInterval(() => {
            calcStep();   
        }, 100);  
    });
    stepBtn.addEventListener('click', () => {
        calcStep();
    });
}

function calcStep() {
    grid = compareData(grid);
    renderTable(grid);
    drawGrid();
    iterations++;
}