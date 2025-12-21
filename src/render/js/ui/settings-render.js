import { resize } from "./game-render.js";
import { setIsStarted, setChanceOfAlive } from "../logic/settings.js";

const sizeRange = document.getElementById('range-size');
const sizeInput = document.getElementById('input-size');

const chanceRange = document.getElementById('range-chance');
const chanceInput = document.getElementById('input-chance');

const speedRange = document.getElementById('range-speed');
const speedInput = document.getElementById('input-speed');

export function initSettings() {
    sizeRange.addEventListener('input', () => {
        sizeInput.value = sizeRange.value;
        resize(sizeRange.value);
        setIsStarted(false);
    });
    sizeInput.addEventListener('input', () => {
        sizeRange.value = sizeInput.value;
        resize(sizeRange.value);
        setIsStarted(false);
    });

    chanceInput.addEventListener('input', () => {
        chanceRange.value = chanceInput.value;
        setIsStarted(false);
        setChanceOfAlive(chanceInput.value);
    });
    chanceRange.addEventListener('input', () => {
        chanceInput.value = chanceRange.value;
        setIsStarted(false);
        setChanceOfAlive(chanceRange.value);
    });
}

function chainInputs(input_1, input_2) {
    input_1.addEventListener('input', () => {
        input_2.value = input_1.value;
    });
    input_2.addEventListener('input', () => {
        input_1.value = input_2.value;
    });
}