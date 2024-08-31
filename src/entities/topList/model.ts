import { createEffect, createEvent, createStore, sample } from "effector";
import { useUnit } from "effector-react";

export type TopListItem = {
    id: number
    name: string
    award: number
    stars: number
    avatar: string
}

export enum TopListType {
    WEEK = 1,
    SEASON,
    ALL_TIME
}

const fetchListFx = createEffect(async (type: TopListType) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    return {
        data: new Array(20).fill(1).map((_, index) => ({
            id: index + 1,
            name: `Name ${index + 1}`,
            award: (20 - index) * 1000,
            stars: (20 - index) * 10,
            avatar: index % 2 === 0 ? 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=' : ''
        }))
    }
})

const listRequested = createEvent<TopListType>()

const $list = createStore<TopListItem[]>([])
const $topList = createStore<TopListType>(TopListType.SEASON)
const $isPending = fetchListFx.pending

sample({
    clock: listRequested,
    target: [$topList, fetchListFx],
})

sample({
    clock: fetchListFx.doneData,
    fn: ({ data }) => data,
    target: $list,
})

const useTopList = () => ({
    list: useUnit($list),
    topList: useUnit($topList),
    isPending: useUnit($isPending),
    listRequested: useUnit(listRequested),
})

export const topListModel = {
    useTopList
}