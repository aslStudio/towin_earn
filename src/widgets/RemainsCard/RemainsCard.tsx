import { useTimer } from "@/shared/lib/hooks/useTimer"
import { Card } from "@/shared/ui/Card"
import { IconBase } from "@/shared/ui/IconBase"

import styles from './RemainsCard.module.scss'
import React from "react"

export type RemainsCardProps = {
    className?: string
}

export const RemainsCard = React.memo<RemainsCardProps>(({ className }) => {
    const { namedView } = useTimer(4708000050)

    return (
        <div className={className}>
            <Card size="s">
                <div className={styles.row}>
                    <h3 className={styles.title}>Remains to wait</h3>
                    <IconBase className={styles.icon} icon="icon-help" width={20} height={20} />
                </div>
                <p className={styles.timer}>{namedView}</p>
                <div className={styles.divider} />
                <div className={styles.row}>
                    <div className={styles.info}>
                        <div className={styles.row}>
                            <p className={styles.title}>People in line</p>
                            <IconBase className={styles.icon} icon="icon-help" width={20} height={20} />
                        </div>
                        <p className={styles.amount}>256K</p>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.title}>Sent messages</p>
                        <p className={styles.amount}>1.7M</p>
                    </div>
                </div>
            </Card>
            <div className={styles.response}>
                <h5 className={styles['response-title']}>
                    Who’s the last one? <br />
                    The last player will receive
                </h5>
                <div className={styles.row}>
                    <p className={styles['response-amount']}>10,000</p>
                    <IconBase icon={'icon-star-gold'} width={40} height={40} />
                </div>
            </div>
        </div>
    )
})