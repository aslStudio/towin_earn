import React from "react";

import styles from './Avatar.module.scss'

export type AvatarProps = {
    className?: string
    src: string
    size: 's' | 'm' | 'l'
    view?: 'gold' | 'silver' | 'bronse' | 'none'
    initials?: string
}

export const Avatar = React.memo<AvatarProps>(({
    src,
    size,
    className,
    view = 'none',
    initials,
}) => (
    <div className={[
        styles.root, 
        styles[`size-${size}`], 
        styles[`view-${view}`],
        className ?? ''
    ].join(' ')}>
        <p>{initials}</p>
        {src.length > 0 && <img src={src} />}
    </div>
))