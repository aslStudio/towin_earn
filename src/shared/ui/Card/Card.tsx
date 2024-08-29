import React from "react";

import styles from './Card.module.scss'

export type CardProps = React.PropsWithChildren<{
    className?: string
    size?: 'xs' | 's' | 'm' | 'l'
    rounded?: 'top' | 'bottom' | 'both'
    onClick?: () => void
}>

export const Card = React.memo<CardProps>(({ 
    className,
    size = 'l',
    rounded = 'both',
    children,
    onClick
}) => {
    return (
        <div
            className={[
                styles.root,
                styles[`size-${size}`],
                styles[`rounded-${rounded}`],
                className
            ].join(' ')}
            onClick={onClick}
        >
            {children}
        </div>
    )
})