import React from 'react'

import { type EarnCardProps, EarnCard } from '../EarnCard'

import styles from './EarnCardList.module.scss'

export type EarnCardListProps = {
    title: string
    data: Omit<EarnCardProps, 'className'>[]
}

export const EarnCardList = React.memo<EarnCardListProps>(({
    title,
    data,
}) => {
    return (
        <div className={styles.root}>
            <h4 className={styles.title}>{title}</h4>
            {data.map((item, index) => (
                <EarnCard
                    className={styles.item}
                    key={index} 
                    {...item} />
            ))}
        </div>
    )
})