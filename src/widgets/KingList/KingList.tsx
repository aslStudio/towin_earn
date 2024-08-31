import React from "react"

import { useTimer } from "@/shared/lib/hooks/useTimer"
import { Card } from "@/shared/ui/Card"
import { IconBase } from "@/shared/ui/IconBase"
import { InfoCell } from "@/shared/ui/InfoCell"

import styles from './KingList.module.scss'

export const KingList = () => {
    const data: KingCellProps[] = [
        {
            time: 60000,
            index: 1,
            title: 'validnext',
            description: 'message',
            isFirst: true,
            isLast: false
        },
        {
            time: 3_000,
            index: 2,
            title: 'alxjo15',
            description: 'message',
            isFirst: false,
            isLast: false
        },
        {
            time: 3_000,
            index: 3,
            title: 'lexakrm',
            description: 'message',
            isFirst: false,
            isLast: false
        },
        {
            time: 4_000,
            index: 4,
            title: 'OxMetaluxe',
            description: 'message',
            isFirst: false,
            isLast: true,
        },
    ]

    return (
        <div>
            {data.map(item => <KingCell {...item} key={item.index} />)}
        </div>
    )
}

type KingCellProps = {
    time: number
    index: number
    title: string
    description: string
    isFirst: boolean
    isLast: boolean
}

const KingCell = React.memo<KingCellProps>(({ 
    time,
    title,
    description,
    index,

    isFirst,
    isLast,
}) => {
    const { dottedViewWithoutHours } = useTimer(time)

    if (isFirst) {
        return (
            <>
                <Card size="ms" rounded="top">
                    <div className={styles['king-cell']}>
                        <IconBase className={styles.icon} icon={'icon-sticker'} width={28} height={28} />
                        <InfoCell title={title} description={description} />
                        <p className={styles.timer}>⏱️ {dottedViewWithoutHours}</p>
                    </div>
                </Card>
                <div className={styles.divider} />
            </>
        )
    }

    if (isLast) {
        return (
            <Card size="ms" rounded="bottom">
                <div className={styles['king-cell']}>
                    <IconBase className={styles.icon} icon={'icon-sticker'} width={28} height={28} />
                    <InfoCell title={title} description={description} />
                    <p className={styles.index}>#{index}</p>
                </div>
            </Card>
        )
    }

    return (
        <>
            <Card size="ms" rounded="none">
                <div className={styles['king-cell']}>
                    <IconBase className={styles.icon} icon={'icon-sticker'} width={28} height={28} />
                    <InfoCell title={title} description={description} />
                    <p className={styles.index}>#{index}</p>
                </div>
            </Card>
            <div className={styles.divider} />
        </>
    )
})