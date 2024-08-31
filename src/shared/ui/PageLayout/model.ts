import { createEvent, createStore } from "effector";
import { useUnit } from "effector-react";

const pageScrollDisabled = createEvent()
const pageScrollEnabled = createEvent()

const $isPageScrollDisabled = createStore(false)
    .on(pageScrollDisabled, () => true)
    .on(pageScrollEnabled, () => false)

export const usePageScrollState = () => ({
    isDisabled: useUnit($isPageScrollDisabled),
    enable: useUnit(pageScrollEnabled),
    disabled: useUnit(pageScrollDisabled),
})