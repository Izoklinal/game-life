import { resize } from "./game-render.js";
import { setIsStarted } from "../logic/settings.js";

export const rangeSize = document.getElementById('range-size');
export const inputSize = document.getElementById('input-size');

export const rangeChance = document.getElementById('range-chance');
export const inputChance = document.getElementById('input-chance');

export const rangeSpeed = document.getElementById('range-speed');
export const inputSpeed = document.getElementById('input-speed');

export function initSettings() {
    chainInputs(rangeSize, inputSize);
    rangeSize.addEventListener('input', () => {
        resize(rangeSize.value);
        setIsStarted(false);
    });
    inputSize.addEventListener('input', () => {
        resize(rangeSize.value);
        setIsStarted(false);
    });
    chainInputs(rangeChance, inputChance);
    chainInputs(rangeSpeed, inputSpeed);
}

function chainInputs(input_1, input_2) {
    input_1.addEventListener('input', () => {
        input_2.value = input_1.value;
    });
    input_2.addEventListener('input', () => {
        input_1.value = input_2.value;
    });
}