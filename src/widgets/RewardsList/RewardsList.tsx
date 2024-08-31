import { IconBase } from "@/shared/ui/IconBase"

import styles from './RewardsList.module.scss'
import React from "react"
import { useTopListModal } from "../TopListModal/model"

export type RewardsListProps = {
    className: string
}

export const RewardsList = React.memo<RewardsListProps>(({ className }) => {
    const { opened } = useTopListModal()

    return (
        <button className={[styles.button, className].join(' ')} onClick={opened}>
            <IconBase icon={'icon-flag'} width={23} height={23} />
            <p>TOP & rewards</p>
            <IconBase icon={'icon-chevron-right'} width={16} height={16} />
        </button>
    )
})