import { createEvent, createStore } from "effector";
import { useUnit } from "effector-react";

const currentLinePositionUpdated = createEvent()

const $currentLinePositions = createStore(0)
    .on(currentLinePositionUpdated, state => state + 1)

const useCurrentLinePositions = () => ({
    currentLinePositions: useUnit($currentLinePositions),
    currentLinePositionUpdated: useUnit(currentLinePositionUpdated)
})

export const lineModel = {
    useCurrentLinePositions
}