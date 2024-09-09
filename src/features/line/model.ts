import { createEvent, createStore, sample } from "effector";
import { useUnit } from "effector-react";

const currentLinePositionUpdated = createEvent()
const animationShowed = createEvent()
const animationHidden = createEvent()

const $isAnimation = createStore(false)
    .on(animationShowed, () => true)
    .on(animationHidden, () => false)
const $currentLinePositions = createStore(0)
    .on(currentLinePositionUpdated, state => state + 1)

sample({
    clock: currentLinePositionUpdated,
    target: animationShowed,
})

const useCurrentLinePositions = () => ({
    currentLinePositions: useUnit($currentLinePositions),
    currentLinePositionUpdated: useUnit(currentLinePositionUpdated)
})

const useSuccessAnimation = () => ({
    isAnimation: useUnit($isAnimation),
    animationShowed,
    animationHidden,
})

export const lineModel = {
    useCurrentLinePositions,
    useSuccessAnimation,
}