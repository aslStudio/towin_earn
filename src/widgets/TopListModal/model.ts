import { topListModel } from "@/entities/topList"
import { createEvent, createStore, sample } from "effector"
import { useUnit } from "effector-react"

const opened = createEvent()
const closed = createEvent()

const $isTopListModal = createStore(false)
    .on(opened, () => true)
    .on(closed, () => false)

sample({
    clock: opened,
    target: topListModel.listFetched,
})

export const useTopListModal = () => ({
    isTopListModal: useUnit($isTopListModal),
    opened: useUnit(opened),
    closed: useUnit(closed)
})