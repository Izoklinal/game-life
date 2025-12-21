import { compareData, createRandomTable, history, checkIfEnded } from "./game.js";
import { renderTable, drawGrid } from "../ui/game-render.js";

let gameSpeedMS = 100;
export function setGameSpeed(value) {
    gameSpeedMS = value;
}
export let tableSize = 100;
export function setTableSize(value) {
    tableSize = value;
}
export let chanceOfAlive = 0.3;
export function setChanceOfAlive(value) {
    chanceOfAlive = value;
}
export let frameMS = 100;
export let iterations = 0;

let isPaused = false;
let isStarted = false;
export function setIsStarted(value) {
    isStarted = value;
}

const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resumeBtn = document.getElementById('resume-btn');
const stepAheadBtn = document.getElementById('step-ahead-btn');
const stepBackBtn = document.getElementById('step-back-btn');
const iterationCount = document.getElementById('iteration-count');

let grid = [];
let run;

export function initSettingsLogic() {
    startBtn.addEventListener('click', () => {
        start();
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

                if (!isStarted) {
                    start();
                    break;
                }

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

function start() {
    pause();
    isStarted = true;
    isPaused = false;
    grid = createRandomTable();
    renderTable(grid);
    iterations = 0;
    iterationCount.innerHTML = iterations;

    resume();
}

export function resume() {
    run = setInterval(() => {
        stepAhead();
        if (checkIfEnded()) {
            pause();
        }
    }, gameSpeedMS);
}
export function pause() {
    clearTimeout(run);
    run = null;
}
function stepBack() {
    const gridItem = history.pop();
    if (!gridItem) return;
    grid = gridItem;
    renderTable(grid);
    drawGrid();
    iterations--;
    iterationCount.innerHTML = iterations;
}
function stepAhead() {
    grid = compareData(grid);
    renderTable(grid);
    drawGrid();
    iterations++;
    iterationCount.innerHTML = iterations;
}