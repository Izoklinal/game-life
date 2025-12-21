import { resize } from "./game-render.js";
import { setIsStarted, setChanceOfAlive, setGameSpeed, pause, resume } from "../logic/settings.js";

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

    speedInput.addEventListener('input', () => {
        speedRange.value = speedInput.value;
        setGameSpeed(speedInput.value * 100);
        pause();
        resume();
    });
    speedRange.addEventListener('input', () => {
        speedInput.value = speedRange.value;
        setGameSpeed(speedRange.value * 100);
        pause();
        resume();
    });
}