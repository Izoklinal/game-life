export let tableSize = 50;
export let chanceOfAlive = 0.3;

export const GameRules = {
    needToBirth: 3,
    minToLive: 2,
    maxToLive: 3
};

export function initTableArray() {
    return Array.from({length: tableSize}, () => 
        Array.from({length: tableSize}, () => false)
    );
}

export function createRandomTable() {
    return Array.from({length: tableSize}, () => 
        Array.from({length: tableSize}, () => Math.random() < chanceOfAlive)
    );
}

export function compareData(oldGrid) {
    const newGrid = initTableArray();
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