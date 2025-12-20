import { compareData, createRandomTable, history } from "./game.js";
import { renderTable, drawGrid } from "../ui/game-render.js";

export let tableSize = 100;
export let chanceOfAlive = 0.3;
export let frameMS = 100;
export let iterations = 0;

let isPaused = false;

const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resumeBtn = document.getElementById('resume-btn');
const stepAheadBtn = document.getElementById('step-ahead-btn');
const stepBackBtn = document.getElementById('step-back-btn');

let grid = createRandomTable();
let run;

export function initSettingsLogic() {
    startBtn.addEventListener('click', () => {
        renderTable(grid);
        iterations = 0;

        run = setInterval(() => {
            stepAhead();
        }, 100);        
    });
    pauseBtn.addEventListener('click', () => {
        pause();
    });
    resumeBtn.addEventListener('click', () => {
        resume();
    });

    stepAheadBtn.addEventListener('click', () => {
        stepAhead();
    });    
    stepBackBtn.addEventListener('click', () => {
        stepBack();
    });

    document.addEventListener('keydown', (e) => {
        // if (e.key === 'ArrowRight') {
        //     pause();
        //     stepAhead();
        // }
        // if (e.key === 'ArrowLeft') {
        //     pause();
        //     stepBack();
        // }
        switch (e.key) {
            case "ArrowRight":
                pause();
                stepAhead();
                break;
            case "ArrowLeft":
                pause();
                stepBack();
                break;
            case " ":
                e.preventDefault();
                if (isPaused) {
                    resume();
                    isPaused = false;
                } else {
                    pause();
                    isPaused = true;
                }
                break;
        }
    });
}

function resume() {
    run = setInterval(() => {
        stepAhead();   
    }, 100);  
}
function pause() {
    clearTimeout(run);
}
function stepBack() {
    const gridItem = history.pop();
    if (!gridItem) return;
    grid = gridItem;
    renderTable(grid);
    drawGrid();
    iterations--;
}
function stepAhead() {
    grid = compareData(grid);
    renderTable(grid);
    drawGrid();
    iterations++;
}