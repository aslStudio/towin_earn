import { createEvent, createStore } from "effector"
import { useUnit } from "effector-react"

const opened = createEvent()
const closed = createEvent()

const $isGetInLineModal = createStore(true)
    .on(opened, () => true)
    .on(closed, () => false)

export const useGetInLineModal = () => ({
    isGetInLineModal: useUnit($isGetInLineModal),
    opened: useUnit(opened),
    closed: useUnit(closed)
})