import React, { useMemo } from "react";

import { toFormattedNumber } from "@/shared/lib/number";
import { Avatar } from "@/shared/ui/Avatar";

import styles from './RatingCard.module.scss'

export type RatingCardProps = {
    className?: string
    avatar: string
    name: string
    amount: number
    rating: number
}

export const RatingCard = React.memo<RatingCardProps>(({
    className,
    avatar,
    name,
    amount,
    rating,
}) => {
    const view = useMemo(() => {
        switch (rating) {
            case 1: return 'gold';
            case 2: return 'silver';
            default: return 'bronse'
        }
    }, [rating])

    const size = useMemo(() => {
        switch (rating) {
            case 1: return 'l';
            default: return 'm'
        }
    }, [rating])

    return (
        <div className={[styles.root, styles[`is-${view}`], className].join(' ')}>
            <div className={styles.background} />
            <Avatar className={styles.avatar} src={avatar} size={size} />
            <div className={styles.container} >
                <p className={styles.rating}>{rating}</p>
                <div className={styles.info}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.amount}>{toFormattedNumber(amount)} 💎</p>
                </div>
            </div>
        </div>
    )
})