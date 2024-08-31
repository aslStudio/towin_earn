import React from "react";

import styles from './Avatar.module.scss'

export type AvatarProps = {
    className?: string
    src: string
    size: 's' | 'm' | 'l'
}

export const Avatar = React.memo<AvatarProps>(({
    src,
    size,
    className,
}) => (
    <div className={[styles.root, styles[`size-${size}`], className ?? ''].join(' ')}>
        <img src={src} />
    </div>
))