import { cellSize, size, ctx, canvas } from "../ui/game-render.js";
import { tableSize, grid, setGrid, setIsPaused } from "./settings.js";

export function initDraw() {
    // canvas.addEventListener('click', (e) => {
    //     setIsPaused(true);
    //     const coords = getCoords(e);
    //     setGrid(coords.xIndex, coords.yIndex);
    // });
    canvas.addEventListener('mousedown', (e) => {
        setIsPaused(true);

        let isRunning = true;
        canvas.addEventListener('mouseup', () => {
            isRunning = false;
            console.log('up');
        });

        const existingsDraws = [];

        let run = setInterval(() => {
            if (!isRunning) {
                clearTimeout(run);
            }
            const coords = getCoords(e);
            if (!existingsDraws.includes(coords)) {                
                setGrid(coords.xIndex, coords.yIndex);
                existingsDraws.push(coords);
            }
        }, 100)
    });
}

function getCoords(e) {
    const x = e.x;
    const y = e.y;
    
    const xIndex = Math.floor(x / cellSize);
    const yIndex = Math.floor(y / cellSize);

    const coords = {
        xIndex,
        yIndex
    }

    return coords;
}