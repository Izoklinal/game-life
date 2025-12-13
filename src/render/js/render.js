const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const width = canvas.clientWidth;
const height = canvas.clientHeight;

canvas.width = width;
canvas.height = height;

const rowCount = 20;

function getRectSize(width, height) {
    if (width < height) {
        return width;
    } else {
        return height;
    }
}

function getStep(size, rowCount) {
    return size / rowCount;
}

export function drawGrid() {
    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 1;

    const size = getRectSize(width, height);
    const step = getStep(size, rowCount);

    for (let x = 0; x <= size; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, size);
        ctx.stroke();
    }
    for (let y = 0; y <= size; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(size, y);
        ctx.stroke();
    }
}