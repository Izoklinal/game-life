import { chanceOfAlive, tableSize } from "./settings.js";

export const history = [];

export const GameRules = {
    needToBirth: 3,
    minToLive: 2,
    maxToLive: 3
};

export function createEmptyTable() {
    return Array.from({length: tableSize}, () => 
        Array.from({length: tableSize}, () => false)
    );
}

export function createRandomTable() {
    return Array.from({length: tableSize}, () => 
        Array.from({length: tableSize}, () => Math.random() < chanceOfAlive)
    );
}

export function checkIfEnded() {
    const l = history.length;
    const cur = history[l - 1];
    
    let prev = history[l - 2];
    if (compareGrids(l, cur, prev)) return true;
    prev = null;

    prev = history[l - 3];
    if (compareGrids(l, cur, prev)) return true;
    prev = null;

    prev = history[l - 4];
    if (compareGrids(l, cur, prev)) return true;
}

function compareGrids(l, grid1, grid2) {
    for (let y = 0; y < l; y++) {
        for (let x = 0; x < l; x++) {
            if (grid1[y][x] !== grid2[y][x]) {
                return true;
            }
        }
    }
    return false;
}

export function compareData(oldGrid) {
    history.push(oldGrid);
    const newGrid = createEmptyTable();
    for (let y = 0; y < tableSize; y++) {
        for (let x = 0; x < tableSize; x++) {
            const _countAlive = countAlive(oldGrid, x, y);
            if (oldGrid[y][x] === true) {
                if (_countAlive >= GameRules.minToLive && _countAlive <= GameRules.maxToLive) {
                    newGrid[y][x] = true;
                }
            } else {
                if (_countAlive === GameRules.needToBirth) {
                    newGrid[y][x] = true;
                }
            }
        }
    }
    return newGrid;
}

function countAlive(oldGrid, x, y) {
    let xFrom = x - 1;
    if (xFrom < 0) {
        xFrom = 0;
    }
    let xTo = x + 1;
    if (xTo >= tableSize) {
        xTo = tableSize - 1;
    }

    let yFrom = y - 1;
    if (yFrom < 0) {
        yFrom = 0;
    }
    let yTo = y + 1;
    if (yTo >= tableSize) {
        yTo = tableSize - 1;
    }

    let count = 0;
    for (let _y = yFrom; _y <= yTo; _y++) {
        for (let _x = xFrom; _x <= xTo; _x++) {
            if (_x === x && _y === y) 
                continue;
            if (oldGrid[_y][_x] === true) 
                count++;
        }
    }
    return count;
}