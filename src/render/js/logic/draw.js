import { cellSize, size, ctx, canvas } from "../ui/game-render.js";
import { tableSize, grid, setGrid, setIsPaused } from "./settings.js";

export function initDraw() {
    // canvas.addEventListener('click', (e) => {
    //     setIsPaused(true);
    //     const coords = getCoords(e);
    //     setGrid(coords.xIndex, coords.yIndex);
    // });
    canvas.addEventListener('click', (e) => {
        setIsPaused(true);
        const coords = getCoords(e);
        setGrid(coords.xIndex, coords.yIndex);
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