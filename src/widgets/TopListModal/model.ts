import { createEvent, createStore } from "effector"
import { useUnit } from "effector-react"

const opened = createEvent()
const closed = createEvent()

const $isTopListModal = createStore(false)
    .on(opened, () => true)
    .on(closed, () => false)

export const useTopListModal = () => ({
    isTopListModal: useUnit($isTopListModal),
    opened: useUnit(opened),
    closed: useUnit(closed)
})