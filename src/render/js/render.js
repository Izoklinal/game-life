import { initTableArray, tableSize, GameRules } from "./game.js";

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const width = canvas.clientWidth;
const height = canvas.clientHeight;

canvas.width = width;
canvas.height = height;

const size = getRectSize(width, height);
const cellSize = getCellSize(size, tableSize);

function getRectSize(width, height) {
    if (width < height) {
        return width;
    } else {
        return height;
    }
}

function getCellSize(size, tableSize) {
    return size / tableSize;
}

export function drawGrid() {
    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 1;    
    for (let x = 0; x <= size; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, size);
        ctx.stroke();
    }
    for (let y = 0; y <= size; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(size, y);
        ctx.stroke();
    }
}

export function renderTable(grid) {
    for (let y = 0; y < tableSize; y++) {
        for (let x = 0; x < tableSize; x++) {
            if (grid[y][x] === true) {
                ctx.fillStyle = 'black';
            } else {
                ctx.fillStyle = 'white';
            }
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
}

