import React from "react"

import { toFormattedNumber } from "@/shared/lib/number"
import { Card } from "@/shared/ui/Card"
import { IconBase } from "@/shared/ui/IconBase"

import styles from './EarnCard.module.scss'

export type EarnCardProps = {
    className: string
    name: string
    award: number
    isDone: boolean
}

export const EarnCard = React.memo<EarnCardProps>(({
    className,
    name,
    award,
    isDone,
}) => {
    return (
        <Card className={className} size="xs">
            <div className={styles.wrapper}>
                <div className={styles['user-info']}>
                    <IconBase icon={'icon-task'} width={30} height={30} />
                    <p>{name}</p>
                </div>
                <div className={styles['award-info']}>
                    <p>+{toFormattedNumber(award)}</p>
                    {!isDone && (
                        <IconBase 
                            icon={'icon-chevron-right'} 
                            width={13} 
                            height={13}/>
                    )}
                </div>
            </div>
        </Card>
    )
})