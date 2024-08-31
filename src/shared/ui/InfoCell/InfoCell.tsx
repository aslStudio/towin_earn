import React from "react";

import styles from './InfoCell.module.scss'

export type InfoCellProps = {
    title: string
    description: string
}

export const InfoCell = React.memo<InfoCellProps>(({
    title,
    description
}) => {
    return (
        <div className={styles.root}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
})